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
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 my-auto">
        
        {/* Left Column: Editorial Headline & Copy */}
        <motion.div 
          className="w-full lg:w-[58%] flex flex-col items-start text-left"
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
            className="text-sm sm:text-base md:text-lg text-[#2b1a05]/80 max-w-[540px] mb-6 md:mb-8 leading-relaxed font-normal"
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

        {/* Right Column: Polaroid Tilt Portrait Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="w-full lg:w-[42%] flex justify-center lg:justify-end relative mt-4 lg:mt-0"
        >
          {/* Polaroid Frame */}
          <div className="relative group p-3.5 sm:p-4 pb-6 sm:pb-7 rounded-[22px] border-[3px] border-[#2b1a05] bg-[#faf7f3] shadow-[7px_7px_0_#2b1a05] transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] max-w-[280px] sm:max-w-[320px] xl:max-w-[350px]">
            
            {/* Washi Tape / Push Pin Sticker */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#ffca78] border border-[#2b1a05]/40 rounded-xs rotate-[-2deg] shadow-xs flex items-center justify-center whitespace-nowrap z-20">
              <span className="text-[9px] font-mono uppercase tracking-wider text-[#2b1a05] font-bold opacity-80 whitespace-nowrap">
                PORTFOLIO • 2026
              </span>
            </div>

            {/* Photo Container */}
            <div className="relative aspect-[4/4.7] max-h-[46vh] rounded-[14px] overflow-hidden border-[2px] border-[#2b1a05] bg-[#efe9da]">
              <img 
                src="/portrait.png" 
                alt="Saksham Gupta Portrait" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Polaroid Bottom Caption */}
            <div className="mt-3 flex items-center justify-between px-1">
              <div className="flex flex-col">
                <span className="font-serif font-medium text-base text-[#2b1a05]">Saksham Gupta</span>
                <span className="text-[10px] font-mono text-[#2b1a05]/60 uppercase tracking-wider font-semibold">Product Developer</span>
              </div>
              <div className="font-hand text-lg text-[#2b1a05] font-bold rotate-[-4deg]">
                Say hello! 👋
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}



