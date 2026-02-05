import { BackgroundBeams } from "@/app/components/ui/background-beams";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-background flex flex-col items-center justify-center antialiased transition-colors">
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block px-3 py-1 mb-6 border border-brand-cyan/30 rounded-full bg-brand-cyan/10 backdrop-blur-md">
          <span className="text-brand-cyan text-xs font-bold tracking-[0.2em] uppercase">
            Architecting the Future
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 leading-tight">
          Intelligent Systems <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">
            Redefined.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Seratrix bridges the gap between software intelligence and hardware
          reality. We engineer end-to-end solutions for the automated world.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#solutions"
            className="rounded-full w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover:bg-brand-cyan transition-colors"
          >
            Explore Solutions
          </a>
          <a
            href="#technology"
            className="rounded-full w-full md:w-auto px-8 py-4 bg-transparent border border-border text-foreground font-bold uppercase tracking-widest text-sm hover:bg-accent transition-colors"
          >
            Our Technology
          </a>
        </div>
      </div>

      <BackgroundBeams />

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-slate-500 pointer-events-none">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
