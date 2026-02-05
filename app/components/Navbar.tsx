"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-wider text-foreground"
        >
          SERATRIX
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-muted-foreground">
          <Link
            href="#solutions"
            className="hover:text-brand-cyan transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="#technology"
            className="hover:text-brand-cyan transition-colors"
          >
            Technology
          </Link>
          <Link
            href="#vision"
            className="hover:text-brand-cyan transition-colors"
          >
            Vision
          </Link>
          <Link
            href="#contact"
            className="hover:text-brand-cyan transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest bg-primary text-primary-foreground hover:bg-brand-cyan transition-colors"
          >
            Partner With Us
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
