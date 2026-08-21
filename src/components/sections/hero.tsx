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
    <section className="relative min-h-[100vh] flex flex-col justify-center pt-[14vh] lg:pt-[18vh] pb-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Editorial Headline & Copy */}
        <motion.div 
          className="w-full lg:w-[58%] flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge with Hand-drawn Aesthetic */}
          <motion.div variants={itemVariants} className="mb-5 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-[2px] border-[#2b1a05] bg-[#ffca78] text-[#2b1a05] shadow-[3px_3px_0_#2b1a05] text-xs font-mono font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>Full-Stack Developer & AI Builder</span>
            </div>
            
            {/* Handwritten cursive note */}
            <span className="font-hand text-lg md:text-xl text-[#2b1a05]/80 rotate-[-2deg] font-semibold">
              ✦ crafting clean, scalable systems
            </span>
          </motion.div>

          {/* Headline in Playfair Display with Italic Accents */}
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif text-[#2b1a05] leading-[1.08] tracking-tight mb-6"
          >
            Turning <span className="italic font-serif font-normal text-[#2b1a05] underline decoration-[#ffca78] decoration-4 underline-offset-8">complex ideas</span> into <span className="italic font-serif font-normal">scalable digital products.</span>
          </motion.h1>

          {/* Subtitle / Intro */}
          <motion.p 
            variants={itemVariants} 
            className="text-base sm:text-lg md:text-xl text-[#2b1a05]/80 max-w-[560px] mb-8 md:mb-10 leading-relaxed font-normal"
          >
            Hi, I’m <span className="font-semibold text-[#2b1a05]">Saksham Gupta</span>. I blend strategic system architecture, AI integration, and sleek modern UI engineering to build products that solve real-world problems.
          </motion.p>

          {/* Action CTAs with Neobrutalist Shadow */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-[2.5px] border-[#2b1a05] bg-[#2b1a05] text-[#ffca78] text-sm font-mono font-semibold uppercase tracking-wider shadow-[4px_4px_0_#ffca78] hover:shadow-[6px_6px_0_#ffca78] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-200"
            >
              <span>Explore Works</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-[2.5px] border-[#2b1a05] bg-[#faf7f3] text-[#2b1a05] text-sm font-mono font-semibold uppercase tracking-wider shadow-[4px_4px_0_#2b1a05] hover:shadow-[6px_6px_0_#2b1a05] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-200"
            >
              <span>Resume PDF</span>
            </a>
          </motion.div>

          {/* Feature Micro-Badges */}
          <motion.div variants={itemVariants} className="mt-10 pt-6 border-t border-[#2b1a05]/15 flex flex-wrap items-center gap-4 text-xs font-mono text-[#2b1a05]/70">
            <div className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#2b1a05]" />
              <span>Full-Stack Architecture</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#2b1a05]" />
              <span>AI Integration</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#2b1a05]" />
              <span>Based in India</span>
            </div>
          </motion.div>

        </motion.div>

        {/* Right Column: Polaroid Tilt Portrait Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="w-full lg:w-[42%] flex justify-center lg:justify-end relative mt-6 lg:mt-0"
        >
          {/* Polaroid Frame */}
          <div className="relative group p-4 sm:p-5 pb-8 sm:pb-10 rounded-[24px] border-[3px] border-[#2b1a05] bg-[#faf7f3] shadow-[8px_8px_0_#2b1a05] transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] max-w-[340px] sm:max-w-[400px]">
            
            {/* Washi Tape / Push Pin Sticker */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#ffca78]/90 border border-[#2b1a05]/30 rounded-sm rotate-[-2deg] shadow-sm flex items-center justify-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#2b1a05] font-semibold opacity-70">
                PORTFOLIO • 2026
              </span>
            </div>

            {/* Photo Container */}
            <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden border-[2.5px] border-[#2b1a05] bg-[#efe9da]">
              <img 
                src="/portrait.png" 
                alt="Saksham Gupta Portrait" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Polaroid Bottom Caption */}
            <div className="mt-4 flex items-center justify-between px-2">
              <div className="flex flex-col">
                <span className="font-serif font-medium text-lg text-[#2b1a05]">Saksham Gupta</span>
                <span className="text-xs font-mono text-[#2b1a05]/60 uppercase tracking-wider">Product Developer</span>
              </div>
              <div className="font-hand text-xl text-[#2b1a05] font-bold rotate-[-4deg]">
                Say hello! 👋
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Retro Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#2b1a05]/60 font-semibold">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-[2px] border-[#2b1a05] flex justify-center pt-1.5 bg-[#faf7f3] shadow-[2px_2px_0_#2b1a05]"
        >
          <motion.div 
            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#2b1a05]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

