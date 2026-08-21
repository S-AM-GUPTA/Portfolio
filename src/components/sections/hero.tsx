"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Globe } from "lucide-react";

export function Hero() {
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 lg:pt-28 pb-8 bg-transparent overflow-hidden">
      
      {/* Profile Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img 
          src="/landscape-hero.png" 
          alt="Saksham Gupta Workstation Background" 
          className="w-full h-full object-cover object-center lg:object-left filter contrast-110 saturate-95 opacity-25 sm:opacity-30 lg:opacity-35 scale-105"
        />
        {/* Parchment Editorial Gradient Overlays for High Contrast & Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f3]/95 via-[#faf7f3]/85 to-[#faf7f3]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f3]/80 via-transparent to-[#faf7f3]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 my-auto">
        
        {/* Decorative Left Side Focus Frame / Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[40%] flex flex-col items-start justify-center hidden lg:flex"
        >
          <div className="relative group p-4 rounded-[22px] border-[3px] border-[#2b1a05] bg-[#faf7f3]/80 backdrop-blur-md shadow-[8px_8px_0_#2b1a05] max-w-[380px]">
            <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#ffca78] border border-[#2b1a05]/40 rounded-xs rotate-[-2deg] shadow-xs">
              <span className="text-[9px] font-mono uppercase tracking-wider text-[#2b1a05] font-bold">
                EST. 2026 • PORTFOLIO
              </span>
            </div>
            
            <div className="relative aspect-[16/10] rounded-[14px] overflow-hidden border-[2px] border-[#2b1a05] shadow-inner mb-3">
              <img 
                src="/landscape-hero.png" 
                alt="Saksham Gupta Close-up" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between px-1">
              <div>
                <span className="font-serif font-bold text-base text-[#2b1a05] block">Saksham Gupta</span>
                <span className="text-[10px] font-mono text-[#2b1a05]/70 uppercase font-semibold">Full Stack & AI Engineer</span>
              </div>
              <span className="font-hand text-base text-[#2b1a05] font-bold rotate-[-3deg]">Crafting code ✦</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Editorial Headline & Copy */}
        <motion.div 
          className="w-full lg:w-[56%] flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge with Hand-drawn Aesthetic */}
          <motion.div variants={itemVariants} className="mb-4 flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-[2px] border-[#2b1a05] bg-[#ffca78] text-[#2b1a05] shadow-[2.5px_2.5px_0_#2b1a05] text-xs font-mono font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>Full-Stack Developer & AI Builder</span>
            </div>
            
            {/* Handwritten cursive note */}
            <span className="font-hand text-base md:text-lg text-[#2b1a05]/80 rotate-[-2deg] font-semibold">
              ✦ crafting clean, scalable systems
            </span>
          </motion.div>

          {/* Headline in Playfair Display with Italic Accents */}
          <motion.h1 
            variants={itemVariants} 
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif text-[#2b1a05] leading-[1.1] tracking-tight mb-4"
          >
            Turning <span className="italic font-serif font-normal text-[#2b1a05] underline decoration-[#ffca78] decoration-4 underline-offset-6">complex ideas</span> into <span className="italic font-serif font-normal">scalable digital products.</span>
          </motion.h1>

          {/* Subtitle / Intro */}
          <motion.p 
            variants={itemVariants} 
            className="text-sm sm:text-base md:text-lg text-[#2b1a05]/85 max-w-[540px] mb-6 md:mb-8 leading-relaxed font-normal bg-[#faf7f3]/60 backdrop-blur-xs p-2.5 rounded-xl border border-[#2b1a05]/10"
          >
            Hi, I’m <span className="font-semibold text-[#2b1a05]">Saksham Gupta</span>. I blend strategic system architecture, AI integration, and sleek modern UI engineering to build products that solve real-world problems.
          </motion.p>

          {/* Action CTAs with Neobrutalist Shadow */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5">
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-[2.5px] border-[#2b1a05] bg-[#2b1a05] text-[#ffca78] text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider shadow-[3.5px_3.5px_0_#ffca78] hover:shadow-[5px_5px_0_#ffca78] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-200"
            >
              <span>Explore Works</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-[2.5px] border-[#2b1a05] bg-[#faf7f3] text-[#2b1a05] text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider shadow-[3.5px_3.5px_0_#2b1a05] hover:shadow-[5px_5px_0_#2b1a05] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-200"
            >
              <span>Resume PDF</span>
            </a>
          </motion.div>

          {/* Feature Micro-Badges */}
          <motion.div variants={itemVariants} className="mt-6 pt-4 border-t border-[#2b1a05]/15 flex flex-wrap items-center gap-3 text-xs font-mono text-[#2b1a05]/70">
            <div className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-[#2b1a05]" />
              <span>Full-Stack Architecture</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#2b1a05]" />
              <span>AI Integration</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#2b1a05]" />
              <span>Based in India</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}






