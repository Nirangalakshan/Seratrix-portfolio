import { Factory, Activity, Car, Zap } from "lucide-react";

const industries = [
  {
    name: "Industrial Automation",
    icon: Factory,
    desc: "Predictive maintenance and autonomous control systems for manufacturing.",
  },
  {
    name: "Healthcare Tech",
    icon: Activity,
    desc: "IoMT devices and analytical platforms for patient monitoring and diagnostics.",
  },
  {
    name: "EV & Mobility",
    icon: Car,
    desc: "Battery management systems and fleet intelligence software.",
  },
  {
    name: "Smart Energy",
    icon: Zap,
    desc: "Grid optimization and real-time consumption monitoring.",
  },
];

export default function Impact() {
  return (
    <section className="section-padding bg-muted/30 dark:bg-background border-t border-border transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Built for Vital Industries
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our solutions drive efficiency in the sectors that matter most. We
            understand the constraints and regulatory requirements of critical
            infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-card p-8 hover:bg-accent transition-colors shadow-sm dark:shadow-none border border-border"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <ind.icon className="w-10 h-10 text-foreground mb-6" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {ind.name}
                </h3>
                <p className="text-sm text-muted-foreground">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 border border-border text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Seratrix?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div>
                <div className="text-4xl font-bold text-brand-cyan mb-2">
                  99.9%
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest">
                  Uptime Engineered
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-cyan mb-2">
                  2x
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest">
                  Faster Deployment
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-cyan mb-2">
                  360°
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest">
                  System Visibility
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
