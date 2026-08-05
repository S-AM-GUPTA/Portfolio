"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrainCircuit, Rocket, Code2, Users } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: <Code2 className="w-6 h-6 text-[var(--color-deep-teal)]" />,
      value: "3+",
      label: "Years Learning",
      description: "Continuous exploration of web and AI.",
      bgColor: "bg-[var(--color-card-mint)]"
    },
    {
      icon: <Rocket className="w-6 h-6 text-[var(--color-deep-teal)]" />,
      value: "3",
      label: "Major Projects",
      description: "From concept to scalable deployment.",
      bgColor: "bg-[var(--color-sea-foam)]"
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-[var(--color-deep-teal)]" />,
      value: "AI",
      label: "Solutions",
      description: "Integrating intelligent capabilities.",
      bgColor: "bg-[var(--color-blush-sand)]"
    },
    {
      icon: <Users className="w-6 h-6 text-[var(--color-deep-teal)]" />,
      value: "Startup",
      label: "Oriented",
      description: "Building for real-world user impact.",
      bgColor: "bg-[var(--color-card-mint)]"
    },
  ];

  return (
    <section id="about" className="py-20 relative z-10 bg-[var(--color-paper-white)]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Who I Am"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-[18px] text-[var(--color-charcoal-navy)] opacity-90 leading-[1.6] font-[400]"
          >
            <p>
              I am a final year <span className="text-[var(--color-ink-navy)] font-[500]">B.Tech CSE (Data Science)</span> student at ABES Institute of Technology (CGPA: 8.01), driven by a passion for building impactful technology.
              My interests lie at the intersection of <span className="text-[var(--color-ink-navy)] font-[500]">full-stack software engineering, artificial intelligence, product design, and entrepreneurship.</span>
            </p>
            <p>
              I enjoy transforming ideas into scalable digital products that solve real-world challenges. It's not just about writing code; it's about engineering solutions that make a difference using the MERN stack and modern tools.
            </p>
            <p>
              Whether it's building AI-powered healthcare solutions, hyperlocal commerce platforms, or community-driven marketplaces, I focus on creating technology that genuinely improves lives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`h-full rounded-[12px] p-8 ${stat.bgColor} flex flex-col`}>
                  <div className="mb-4 inline-block">
                    {stat.icon}
                  </div>
                  <h3 className="text-[32px] font-[400] font-serif text-[var(--color-charcoal-navy)] mb-1 leading-none">{stat.value}</h3>
                  <div className="text-[12px] font-mono tracking-widest uppercase text-[var(--color-deep-teal)] mb-3 mt-2">
                    {stat.label}
                  </div>
                  <p className="text-[14px] text-[var(--color-charcoal-navy)] opacity-80 leading-[1.5]">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
