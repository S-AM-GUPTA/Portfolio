"use client";

import { motion } from "framer-motion";

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
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 md:pb-20 bg-[var(--color-paper-white)]">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Text */}
        <motion.div 
          className="w-full lg:w-[60%] flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <span className="text-[12px] font-[500] font-mono text-[var(--color-ink-navy)] uppercase tracking-widest bg-[var(--color-card-mint)] px-3 py-1 rounded-full">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-[64px] font-[400] font-serif text-[var(--color-charcoal-navy)] leading-[1.1] mb-6 md:mb-8">
            Turning Complex Problems Into Scalable Solutions.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-[18px] text-[var(--color-charcoal-navy)] opacity-80 max-w-[600px] mb-8 md:mb-12 leading-[1.6] font-[400]">
            I build modern web applications, AI-powered systems, and scalable architectures that transform ideas into real-world impact.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects"
              className="px-6 py-3 rounded-[48px] text-[16px] font-[500] bg-[var(--color-deep-teal)] hover:bg-[var(--color-forest-floor)] text-white transition-colors"
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="w-full max-w-[320px] sm:max-w-sm lg:w-[40%] relative mt-8 lg:mt-0 mx-auto lg:mx-0"
        >
          <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border-8 border-[var(--color-card-mint)] bg-[var(--color-blush-sand)] group">
            <img 
              src="/portrait.png" 
              alt="Saksham Portrait" 
              className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
