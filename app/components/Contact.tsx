export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-muted/30 dark:bg-background py-20 border-t border-border relative overflow-hidden transition-colors"
    >
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Ready to Engineer the Future?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Partner with Seratrix to build intelligent, scalable, and future-proof
          systems.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
          <a
            href="mailto:contact@seratrix.com"
            className="px-8 py-4 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-lg transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
          >
            Get in Touch
          </a>
          <a
            href="#"
            className="px-8 py-4 bg-transparent border border-border text-foreground font-bold rounded-lg hover:bg-accent transition-colors"
          >
            Schedule Demo
          </a>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} Seratrix. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-brand-blue dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:text-brand-blue dark:hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-brand-blue dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
