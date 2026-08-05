"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { skillsList } from "@/components/sections/skills";

export function Hero() {
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
    <section className="relative min-h-[100vh] flex flex-col justify-center pt-[15vh] lg:pt-[20vh] pb-24 bg-[var(--color-paper-white)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Side: Text */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <span className="text-[12px] font-[500] font-mono text-[var(--color-ink-navy)] uppercase tracking-widest bg-[var(--color-card-mint)] px-3 py-1 rounded-full">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-[56px] xl:text-[64px] font-[400] font-serif text-[var(--color-charcoal-navy)] leading-[1.1] mb-6 md:mb-8">
            Turning Complex Problems Into Scalable Solutions.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-[18px] text-[var(--color-charcoal-navy)] opacity-80 max-w-[540px] mb-8 md:mb-12 leading-[1.6] font-[400]">
            I build modern web applications, AI-powered systems, and scalable architectures that transform ideas into real-world impact.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects"
              className="px-6 py-3 rounded-[48px] text-[16px] font-[500] bg-[var(--color-deep-teal)] hover:bg-[var(--color-forest-floor)] text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[var(--color-deep-teal)]/20"
            >
              Explore Projects
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-[48px] text-[16px] font-[500] bg-transparent border border-[var(--color-mint-mist)] hover:bg-[var(--color-card-mint)] text-[var(--color-charcoal-navy)] transition-colors"
            >
              Download Resume
            </a>
          </motion.div>

        </motion.div>

        {/* Right Side: Portrait */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0"
        >
          {/* Floating animation wrapper */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]"
          >
            <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border-8 border-[var(--color-card-mint)] bg-[var(--color-blush-sand)] group shadow-2xl shadow-[var(--color-deep-teal)]/5">
              <img 
                src="/portrait.png" 
                alt="Saksham Gupta Portrait" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Skill Logos Marquee Banner */}
    <div className="w-full overflow-hidden bg-[var(--color-paper-white)]/60 backdrop-blur-md border-y border-[var(--color-mint-mist)]/30 py-6 flex items-center relative z-20">
      <motion.div
        className="flex gap-12 items-center w-max pr-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {/* Render twice for seamless infinite scroll */}
        {[...skillsList, ...skillsList].map((skill, i) => (
          <div key={`${skill.name}-${i}`} className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" title={skill.name}>
            <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
    </>
  );
}
