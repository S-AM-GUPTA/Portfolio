"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrainCircuit, Rocket, Code2, Users } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)", scale: 0.95 },
  visible: {
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

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
    <section id="about" className="py-20 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Who I Am"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-6 text-[18px] text-[var(--color-charcoal-navy)] opacity-90 leading-[1.6] font-[400]"
          >
            <motion.p variants={textVariants}>
              I am a final year <span className="text-[var(--color-ink-navy)] font-[500]">B.Tech CSE (Data Science)</span> student at ABES Institute of Technology (CGPA: 8.01), driven by a passion for building impactful technology.
              My interests lie at the intersection of <span className="text-[var(--color-ink-navy)] font-[500]">full-stack software engineering, artificial intelligence, product design, and entrepreneurship.</span>
            </motion.p>
            <motion.p variants={textVariants}>
              I enjoy transforming ideas into scalable digital products that solve real-world challenges. It's not just about writing code; it's about engineering solutions that make a difference using the MERN stack and modern tools.
            </motion.p>
            <motion.p variants={textVariants}>
              Whether it's building AI-powered healthcare solutions, hyperlocal commerce platforms, or community-driven marketplaces, I focus on creating technology that genuinely improves lives.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
              >
                <div className={`h-full rounded-[12px] p-8 ${stat.bgColor} flex flex-col shadow-sm hover:shadow-2xl hover:shadow-[var(--color-deep-teal)]/20 transition-shadow duration-500`}>
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}
