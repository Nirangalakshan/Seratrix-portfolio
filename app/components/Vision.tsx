"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const roadmap = [
  {
    year: "2025",
    title: "Foundation",
    desc: "Build the core Seratrix intelligent systems platform. Launch pilot AI and IoT solutions with early partners. Validate performance through real-world deployments.",
  },
  {
    year: "2026",
    title: "Integration",
    desc: "Expand deployments across industries. Integrate AI capabilities with existing enterprise and industrial systems. Deliver connected, data-driven operations.",
  },
  {
    year: "2027",
    title: "Intelligent Automation",
    desc: "Introduce advanced automation and decision-support systems. Enable predictive, efficient, and scalable operations. Support organizations in building smarter digital infrastructure.",
  },
];

const founders = [
  {
    name: "Achila T",
    role: "Co-Founder",
    image: "/founders/achila.png",
  },
  {
    name: "Niranga L",
    role: "Co-Founder",
    image: "/founders/niranga.png",
  },
  {
    name: "M Nishfan",
    role: "Co-Founder",
    image: "/founders/nishfan.png",
  },
];

export default function Vision() {
  return (
    <section
      id="vision"
      className="section-padding bg-muted/30 dark:bg-background border-t border-border transition-colors relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Vision & Roadmap */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold text-foreground mb-12"
            >
              Strategic Roadmap
            </motion.h2>
            <div className="space-y-12 border-l border-brand-cyan/20 pl-8 relative">
              {roadmap.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-background border-2 border-brand-cyan shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                  </div>
                  <span className="text-brand-cyan font-mono text-sm font-bold mb-1 block tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="text-foreground font-bold text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leaders / Founders */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold text-foreground mb-12"
            >
              The Visionaries
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {founders.map((founder, i) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group relative"
                >
                  <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden bg-muted/20 border border-white/10 group-hover:border-brand-cyan/40 transition-all duration-500 shadow-xl">
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-4">
                      <p className="text-white font-bold text-lg leading-none">
                        {founder.name}
                      </p>
                      <p className="text-brand-cyan text-xs font-medium mt-1 uppercase tracking-widest">
                        {founder.role}
                      </p>
                    </div>
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cultural Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H15.017C13.3601 14 12.017 12.6569 12.017 11V7C12.017 5.34315 13.3601 4 15.017 4H19.017C20.6739 4 22.017 5.34315 22.017 7V11C22.017 12.6569 20.6739 14 19.017 14V16C20.6739 16 22.017 17.3431 22.017 19V21H14.017ZM2.01695 21L2.01695 18C2.01695 16.8954 2.91238 16 4.01695 16H7.01695V14H3.01695C1.3601 14 0.0169531 12.6569 0.0169531 11V7C0.0169531 5.34315 1.3601 4 3.01695 4H7.01695C8.6738 4 10.017 5.34315 10.017 7V11C10.017 12.6569 8.6738 14 7.01695 14V16C8.6738 16 10.017 17.3431 10.017 19V21H2.01695Z" />
                </svg>
              </div>
              <blockquote className="text-lg text-muted-foreground italic relative z-10 leading-relaxed">
                &quot;We are not just writing code; we are encoding intelligence
                into the fabric of reality. Seratrix is where software meets
                silicon.&quot;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 relative z-10">
                <div className="h-[2px] w-8 bg-brand-cyan"></div>
                <span className="text-foreground font-bold text-sm tracking-widest uppercase">
                  The Founding Team
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
