"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackgroundCellsProps {
  children?: React.ReactNode;
  className?: string;
}

export const BackgroundCells = ({
  children,
  className,
}: BackgroundCellsProps) => {
  return (
    <div
      className={cn(
        "relative h-screen flex justify-center overflow-hidden bg-white dark:bg-slate-950 transition-colors",
        className,
      )}
    >
      <BackgroundCellCore />
      {children && (
        <div className="relative z-50 pointer-events-none select-none h-full flex flex-col justify-center items-center">
          {children}
        </div>
      )}
    </div>
  );
};

const BackgroundCellCore = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const size = 300;
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="h-full absolute inset-0 z-0 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="absolute h-[180vh] -top-[10vh] inset-x-0 overflow-hidden bg-white dark:bg-slate-950 transition-colors">
        <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-white dark:bg-slate-950 [mask-image:linear-gradient(to_bottom,transparent,black)] dark:[mask-image:linear-gradient(to_bottom,transparent,black)]" />
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
              mousePosition.y - size / 2
            }px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-slate-700 relative z-[100]" />
        </div>
        <Pattern className="opacity-[0.5]" cellClassName="border-slate-800" />
      </div>
    </div>
  );
};

interface PatternProps {
  className?: string;
  cellClassName?: string;
}

const Pattern = ({ className, cellClassName }: PatternProps) => {
  const x = new Array(50).fill(0);
  const y = new Array(35).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState<[number, number] | null>(null);

  return (
    <div
      className={cn("flex flex-row relative z-30 justify-center", className)}
    >
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col relative z-20 border-b border-slate-300 dark:border-slate-800"
        >
          {row.map((column, colIdx) => (
            <Cell
              key={`matrix-col-${colIdx}`}
              rowIdx={rowIdx}
              colIdx={colIdx}
              clickedCell={clickedCell}
              setClickedCell={setClickedCell}
              cellClassName={cellClassName}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const Cell = ({
  rowIdx,
  colIdx,
  clickedCell,
  setClickedCell,
  cellClassName,
}: {
  rowIdx: number;
  colIdx: number;
  clickedCell: [number, number] | null;
  setClickedCell: (cell: [number, number] | null) => void;
  cellClassName?: string;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (clickedCell) {
      const distance = Math.sqrt(
        Math.pow(clickedCell[0] - rowIdx, 2) +
          Math.pow(clickedCell[1] - colIdx, 2),
      );
      controls.start({
        opacity: [0, 1 - distance * 0.1, 0],
        transition: { duration: distance * 0.2 },
      });
    }
  }, [clickedCell, rowIdx, colIdx, controls]);

  return (
    <div
      className={cn(
        "bg-transparent border-l border-slate-300 dark:border-slate-800",
        cellClassName,
      )}
      onClick={() => setClickedCell([rowIdx, colIdx])}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: [0, 1, 0.5],
        }}
        transition={{
          duration: 0.5,
          ease: "backOut",
        }}
        animate={controls}
        className="bg-cyan-500 h-10 w-10 sm:h-12 sm:w-12 transition-colors hover:bg-cyan-400"
      />
    </div>
  );
};
