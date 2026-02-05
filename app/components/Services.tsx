import { Code, Bot, Cloud, Cpu, Activity, Server } from "lucide-react";

const services = [
  {
    title: "Custom Software",
    description:
      "High-performance, scalable applications tailored to complex enterprise needs. We build the digital backbone of your business.",
    icon: Code,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent algorithms that optimize processes, predict outcomes, and automate decision-making at scale.",
    icon: Bot,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Resilient infrastructure and CI/CD pipelines ensuring maximum uptime and rapid deployment velocity.",
    icon: Cloud,
  },
  {
    title: "Embedded Systems & IoT",
    description:
      "Bridging the physical and digital. Custom firmware and hardware integration for smart device ecosystems.",
    icon: Cpu,
  },
  {
    title: "Intelligent Automation",
    description:
      "End-to-end process automation reducing manual overhead and increasing operational precision.",
    icon: Activity,
  },
  {
    title: "System Architecture",
    description:
      "Robust, future-proof architectural patterns designed for microservices and distributed computing.",
    icon: Server,
  },
];

export default function Services() {
  return (
    <section
      id="solutions"
      className="section-padding bg-background relative top-border transition-colors"
    >
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
            Core Definitions.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            We provide a holistic active stack for modern industry. From the
            metal to the cloud, Seratrix delivers engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="glass-card glass-card-hover p-8 rounded-2xl group cursor-pointer border-t border-border"
            >
              <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-cyan/10 group-hover:text-brand-cyan transition-colors text-muted-foreground">
                <s.icon size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4 group-hover:text-brand-cyan transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
