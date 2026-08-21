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
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 lg:pt-28 pb-16 bg-[#050505] overflow-hidden">
      
      {/* Full Background Landscape Image & Seamless Color Blend Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        {/* Workstation Photo */}
        <img 
          src="/landscape-hero.png" 
          alt="Saksham Gupta Workstation" 
          className="w-full h-full object-cover object-[25%_center] lg:object-left opacity-90 sm:opacity-95"
        />
        
        {/* Horizontal Gradient Overlay: Blends photo's dark background into text section */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-[#050505]/85 to-[#050505] lg:from-transparent lg:via-[#050505]/80 lg:to-[#050505]" />
        
        {/* Subtle Radial Glow behind Text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 h-full bg-radial from-[#ffca78]/5 to-transparent pointer-events-none" />

        {/* Bottom Fade Transition into Parchment Body */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#faf7f3] via-[#faf7f3]/40 to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-end my-auto">
        
        {/* Right Column: Editorial Headline & Blended Copy */}
        <motion.div 
          className="w-full lg:w-[52%] xl:w-[50%] flex flex-col items-start text-left lg:pl-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge with Hand-drawn Aesthetic */}
          <motion.div variants={itemVariants} className="mb-4 flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-[2px] border-[#2b1a05] bg-[#ffca78] text-[#2b1a05] shadow-[2.5px_2.5px_0_#ffffff] text-xs font-mono font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>Full-Stack Developer & AI Builder</span>
            </div>
            
            {/* Handwritten cursive note */}
            <span className="font-hand text-base md:text-lg text-[#ffca78] rotate-[-2deg] font-semibold tracking-wide">
              ✦ crafting clean, scalable systems
            </span>
          </motion.div>

          {/* Headline in Playfair Display with Italic Accents */}
          <motion.h1 
            variants={itemVariants} 
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif text-[#faf7f3] leading-[1.1] tracking-tight mb-4 drop-shadow-sm"
          >
            Turning <span className="italic font-serif font-normal text-[#ffca78] underline decoration-[#ffca78] decoration-4 underline-offset-6">complex ideas</span> into <span className="italic font-serif font-normal text-[#faf7f3]">scalable digital products.</span>
          </motion.h1>

          {/* Subtitle / Intro */}
          <motion.p 
            variants={itemVariants} 
            className="text-sm sm:text-base md:text-lg text-[#faf7f3]/85 max-w-[540px] mb-6 md:mb-8 leading-relaxed font-normal"
          >
            Hi, I’m <span className="font-semibold text-white">Saksham Gupta</span>. I blend strategic system architecture, AI integration, and sleek modern UI engineering to build products that solve real-world problems.
          </motion.p>

          {/* Action CTAs with High-Contrast Neobrutalist Shadow */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5">
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-[2.5px] border-[#2b1a05] bg-[#ffca78] text-[#2b1a05] text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider shadow-[3.5px_3.5px_0_#ffffff] hover:shadow-[5px_5px_0_#ffffff] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-200"
            >
              <span>Explore Works</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-[2.5px] border-[#faf7f3]/40 bg-white/10 backdrop-blur-sm text-[#faf7f3] text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider shadow-[3.5px_3.5px_0_#ffca78] hover:bg-white/20 hover:shadow-[5px_5px_0_#ffca78] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-200"
            >
              <span>Resume PDF</span>
            </a>
          </motion.div>

          {/* Feature Micro-Badges */}
          <motion.div variants={itemVariants} className="mt-8 pt-4 border-t border-[#faf7f3]/15 flex flex-wrap items-center gap-3 text-xs font-mono text-[#faf7f3]/75">
            <div className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-[#ffca78]" />
              <span>Full-Stack Architecture</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#ffca78]" />
              <span>AI Integration</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#ffca78]" />
              <span>Based in India</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}






