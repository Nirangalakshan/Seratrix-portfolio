export default function Vision() {
  return (
    <section
      id="vision"
      className="section-padding bg-muted/30 dark:bg-background border-t border-border transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Vision & Roadmap */}
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Strategic Roadmap
            </h2>
            <div className="space-y-8 border-l border-border pl-8 relative">
              {[
                {
                  year: "2025",
                  title: "Foundation",
                  desc: "Core intelligent system architecture development. Launch of pilot IoT modules.",
                },
                {
                  year: "2026",
                  title: "Integration",
                  desc: "Expansion of AI interoperability with legacy industrial hardware.",
                },
                {
                  year: "2027",
                  title: "Autonomy",
                  desc: "Full-scale autonomous decision engines deployment for enterprise clients.",
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-primary border border-brand-cyan shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                  <span className="text-brand-cyan font-mono text-sm mb-1 block">
                    {item.year}
                  </span>
                  <h3 className="text-foreground font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team / Culture */}
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Leadership
            </h2>
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm dark:shadow-none">
              <blockquote className="text-xl text-muted-foreground italic mb-6">
                &quot;We are not just writing code; we are encoding intelligence
                into the fabric of reality. Seratrix is where software meets
                silicon.&quot;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue" />
                <div>
                  <div className="text-foreground font-bold">
                    Seratrix Engineering
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Founding Team
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-card border border-border rounded-lg text-center shadow-sm dark:shadow-none">
                <div className="text-2xl font-bold text-foreground mb-1">
                  15+
                </div>
                <div className="text-xs text-muted-foreground uppercase">
                  Projects Shipped
                </div>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg text-center shadow-sm dark:shadow-none">
                <div className="text-2xl font-bold text-foreground mb-1">
                  24/7
                </div>
                <div className="text-xs text-muted-foreground uppercase">
                  System Reliability
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
