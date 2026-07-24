"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/card";
import { BrainCircuit, Rocket, Code2, Users } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: <Code2 className="w-6 h-6 text-accent-purple" />,
      value: "3+",
      label: "Years Learning",
      description: "Continuous exploration of web and AI.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-accent-blue" />,
      value: "3",
      label: "Major Projects",
      description: "From concept to scalable deployment.",
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-accent-cyan" />,
      value: "AI",
      label: "Solutions",
      description: "Integrating intelligent capabilities.",
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-500" />,
      value: "Startup",
      label: "Oriented",
      description: "Building for real-world user impact.",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Who I Am"

        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-lg text-muted/90 leading-relaxed"
          >
            <p>
              I am a final year <span className="text-foreground font-medium">B.Tech CSE (Data Science)</span> student at ABES Institute of Technology (CGPA: 8.01), driven by a passion for building impactful technology.
              My interests lie at the intersection of <span className="text-foreground font-medium">full-stack software engineering, artificial intelligence, product design, and entrepreneurship.</span>
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
                <TiltCard className="h-full">
                  <div className="mb-4 p-3 rounded-xl bg-background/50 inline-block border border-white/5">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
                  <div className="text-sm font-semibold tracking-wider uppercase text-muted mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm text-muted/70">{stat.description}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
