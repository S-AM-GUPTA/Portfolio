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
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 lg:pt-32 pb-14 bg-[#0a0705] overflow-hidden">
      
      {/* 100% Full-Screen Widescreen Background Photo starting directly below Navbar */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <img 
          src="/hero-bg.png" 
          alt="Saksham Gupta Profile" 
          className="absolute inset-x-0 top-[80px] lg:top-[88px] w-full h-[calc(100%-80px)] lg:h-[calc(100%-88px)] object-cover object-[20%_center] opacity-95 filter brightness-105 contrast-105"
        />
        
        {/* Full-Screen Dark Overlay for Text Legibility & Contrast */}
        <div className="absolute inset-0 top-[80px] lg:top-[88px] bg-gradient-to-r from-[#0a0705]/85 via-[#0a0705]/60 to-[#0a0705]/85 lg:from-[#0a0705]/60 lg:via-[#0a0705]/50 lg:to-[#0a0705]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0705] via-transparent via-50% to-[#0a0705]" />
        
        {/* Subtle Bottom Fade into Parchment Section */}
        <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-[#faf7f3] via-[#faf7f3]/30 to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-end my-auto">
        
        {/* Floating Editorial Text Column directly on top of Full-Screen Image */}
        <motion.div 
          className="w-full lg:w-[56%] xl:w-[52%] lg:ml-auto flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-4 flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border-[2px] border-[#2b1a05] bg-[#ffca78] text-[#2b1a05] shadow-[3px_3px_0_#2b1a05] text-xs font-mono font-bold tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
              <span>Full-Stack Developer & AI Builder</span>
            </div>
            
            {/* Handwritten cursive note */}
            <span className="font-hand text-base md:text-lg text-[#ffca78] rotate-[-2deg] font-bold drop-shadow-md">
              ✦ crafting clean, scalable systems
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants} 
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif text-[#faf7f3] leading-[1.12] tracking-tight mb-5 font-medium drop-shadow-lg"
          >
            Turning <span className="italic font-serif font-normal text-[#ffca78] underline decoration-[#ffca78] decoration-4 underline-offset-8">complex ideas</span> into <span className="italic font-serif font-normal text-[#faf7f3]">scalable digital products.</span>
          </motion.h1>

          {/* Subtitle / Intro */}
          <motion.p 
            variants={itemVariants} 
            className="text-base sm:text-lg text-[#faf7f3]/95 max-w-[560px] mb-7 md:mb-9 leading-relaxed font-normal drop-shadow-md"
          >
            Hi, I’m <span className="font-semibold text-[#ffca78]">Saksham Gupta</span>. I blend strategic system architecture, AI integration, and sleek modern UI engineering to build products that solve real-world problems.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full border-[2.5px] border-[#2b1a05] bg-[#ffca78] text-[#2b1a05] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider shadow-[4px_4px_0_#2b1a05] hover:bg-[#faf7f3] hover:shadow-[6px_6px_0_#2b1a05] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-200"
            >
              <span>Explore Works</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-[2.5px] border-[#faf7f3]/50 bg-[#0a0705]/40 backdrop-blur-xs text-[#faf7f3] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider shadow-[3.5px_3.5px_0_rgba(0,0,0,0.6)] hover:border-[#ffca78] hover:text-[#ffca78] hover:bg-[#0a0705]/60 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-200"
            >
              <span>Resume PDF</span>
            </a>
          </motion.div>

          {/* Feature Micro-Badges */}
          <motion.div variants={itemVariants} className="mt-8 pt-5 border-t border-[#faf7f3]/25 flex flex-wrap items-center gap-3 text-xs font-mono text-[#faf7f3]/90 font-medium drop-shadow-sm">
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









