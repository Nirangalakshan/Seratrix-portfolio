"use client";

import { BackgroundBeams } from "@/app/components/ui/background-beams";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-background flex items-center justify-center antialiased transition-colors py-20 lg:py-0">
      <div className="relative z-20 max-w-8xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-3 py-1 mb-6 border border-brand-cyan/30 rounded-full bg-brand-cyan/10 backdrop-blur-md"
          >
            <span className="text-brand-cyan text-xs font-bold tracking-[0.2em] uppercase">
              Architecting the Future
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight"
          >
            Intelligent Systems <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple animate-gradient-x">
              Redefined.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light"
          >
            Seratrix bridges the gap between software intelligence and hardware
            reality. We engineer end-to-end solutions for the automated world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#solutions"
              className="rounded-full w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover:bg-brand-cyan transition-all hover:scale-105 active:scale-95 text-center shadow-lg shadow-brand-cyan/20"
            >
              Explore Solutions
            </a>
            <a
              href="#technology"
              className="rounded-full w-full sm:w-auto px-8 py-4 bg-transparent border border-border text-foreground font-bold uppercase tracking-widest text-sm hover:bg-accent transition-all hover:scale-105 active:scale-95 text-center"
            >
              Our Technology
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - The Image with Background Blending */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative group hidden lg:block justify-self-center lg:justify-self-end w-full max-w-sm xl:max-w-md"
        >
          {/* Glowing backdrops to set the stage for Screen blending */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-cyan/20 rounded-full blur-[100px] opacity-30 animate-pulse pointer-events-none"></div> */}

          <motion.div
            animate={{
              y: [0, 0, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mt-10 pointer-events-none"
          >
            {/* 
              Using mix-blend-mode: screen here effectively "removes" the dark background of the image,
              allowing only the lighter, glowy elements to show through and blend with our page background.
            */}
            <Image
              src="/images/hero.png"
              alt="Seratrix Intelligent Solutions"
              width={800}
              height={800}
              className="w-200 h-150 overflow-hidden mix-blend-screen rounded-4xl"
              priority
            />
          </motion.div>

          {/* Floating UI Elements or Details could go here */}
        </motion.div>

        {/* Mobile Image - also blended */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:hidden w-full max-w-md mx-auto relative mt-10"
        >
          <div className="absolute -inset-10 bg-brand-cyan/10 rounded-full blur-[60px]"></div>
          <Image
            src="/images/startup_solutions_hero_1770647347498.png"
            alt="Seratrix Intelligent Solutions"
            width={600}
            height={600}
            className="w-full h-auto object-contain mix-blend-screen rounded-xl"
          />
        </motion.div>
      </div>

      <BackgroundBeams className="opacity-30" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-muted-foreground pointer-events-none"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
