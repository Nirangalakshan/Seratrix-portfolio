import { Terminal, Cpu, Cloud, Brain } from "lucide-react";

const technologies = [
  {
    category: "Software Engineering",
    icon: Terminal,
    color: "text-brand-cyan",
    items: [
      "React & Next.js",
      "TypeScript",
      "Rust",
      "Python",
      "Node.js High Scale",
    ],
  },
  {
    category: "AI & Intelligence",
    icon: Brain,
    color: "text-brand-purple",
    items: [
      "PyTorch & TensorFlow",
      "Llama & OpenAI LLMs",
      "Computer Vision",
      "Predictive Analytics",
      "Edge AI",
    ],
  },
  {
    category: "Cloud Infrastructure",
    icon: Cloud,
    color: "text-brand-blue",
    items: [
      "AWS & Azure",
      "Kubernetes (K8s)",
      "Docker",
      "Terraform IaaS",
      "Serverless Architecture",
    ],
  },
  {
    category: "Hardware & IoT",
    icon: Cpu,
    color: "text-brand-cyan",
    items: [
      "Embedded C/C++",
      "ESP32 & ARM Cortex",
      "Custom PCB Design",
      "Industrial Sensors",
      "RTOS",
    ],
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="section-padding bg-muted/30 dark:bg-background relative overflow-hidden transition-colors"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Engineered for <br />
              <span className="text-brand-cyan">Maximum Performance.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
              We don&apos;t just use tools; we architect solutions. Our
              technology stack is selected for rigour, scalability, and speed.{" "}
              <br />
              <br />
              Whether it is high-frequency trading algorithms or
              millisecond-latency industrial controllers, Seratrix has the
              engineering depth to deliver.
            </p>

            <div className="p-6 bg-card border border-border rounded-xl backdrop-blur-sm shadow-sm dark:shadow-none">
              <h4 className="font-bold text-foreground mb-2">
                System Architecture
              </h4>
              <p className="text-sm text-muted-foreground">
                Microservices-based, event-driven, and containerized. We ensure
                your systems are resilient, observable, and easy to maintain.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="p-6 bg-card border border-border rounded-lg hover:border-brand-cyan/50 transition-colors group shadow-sm dark:shadow-none"
              >
                <tech.icon className={`w-8 h-8 mb-4 ${tech.color}`} />
                <h3 className="font-display font-medium text-foreground mb-4 text-lg">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-border rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
