import { Code, Laptop, Cloud, Cpu } from "lucide-react";

const services = [
  {
    title: "Software Solutions",
    description:
      "High-performance, scalable applications tailored to complex enterprise needs. We build the digital backbone of your business.",
    icon: Code,
  },
  {
    title: "Fullstack Web Solutions",
    description:
      "Comprehensive web development including POS systems, business portfolios, and automated deployments for global scale.",
    icon: Laptop,
  },
  {
    title: "IOT Solutions",
    description:
      "Bridging the physical and digital realms. Custom firmware, hardware integration, and intelligent device ecosystems.",
    icon: Cpu,
  },
  {
    title: "GCP Cloud Services",
    description:
      "Leveraging Google Cloud Platform for resilient infrastructure, cloud-native deployments, and managed services.",
    icon: Cloud,
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
