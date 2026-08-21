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
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 lg:pt-28 pb-12 bg-[#0d0905] overflow-hidden">
      
      {/* Background Profile Photo (Framed on Left Side with Dramatic Backlight) */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        {/* Left Side Face Photo */}
        <img 
          src="/hero-bg.png" 
          alt="Saksham Gupta Profile" 
          className="absolute left-0 top-0 w-full sm:w-[85%] lg:w-[62%] xl:w-[58%] h-full object-cover object-[15%_center] lg:object-left opacity-95 filter brightness-105 contrast-105"
        />
        
        {/* Gradient Blend Overlays: Fades photo seamlessly from left into dark espresso on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0d0905]/40 via-35% to-[#0d0905] lg:from-transparent lg:via-[#0d0905]/65 lg:via-42% lg:to-[#0d0905]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0905]/80 via-transparent via-40% to-[#0d0905]" />
        
        {/* Bottom Fade Transition into Parchment Section below */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#faf7f3] via-[#faf7f3]/30 to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-end my-auto">
        
        {/* Right Column: Editorial Headline & Copy (Positioned on the Right so Face is Unobstructed) */}
        <motion.div 
          className="w-full lg:w-[54%] xl:w-[50%] lg:ml-auto flex flex-col items-start text-left bg-[#faf7f3]/95 border-[3px] border-[#2b1a05] rounded-3xl p-7 sm:p-9 md:p-11 shadow-[10px_10px_0_#2b1a05] backdrop-blur-md"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge with Hand-drawn Aesthetic */}
          <motion.div variants={itemVariants} className="mb-4 flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border-[2px] border-[#2b1a05] bg-[#ffca78] text-[#2b1a05] shadow-[2.5px_2.5px_0_#2b1a05] text-xs font-mono font-bold tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
              <span>Full-Stack Developer & AI Builder</span>
            </div>
            
            {/* Handwritten cursive note */}
            <span className="font-hand text-base md:text-lg text-[#2b1a05] rotate-[-2deg] font-bold">
              ✦ crafting clean, scalable systems
            </span>
          </motion.div>

          {/* Headline in Playfair Display with Italic Accents */}
          <motion.h1 
            variants={itemVariants} 
            className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-serif text-[#2b1a05] leading-[1.15] tracking-tight mb-4 font-medium"
          >
            Turning <span className="italic font-serif font-normal text-[#2b1a05] underline decoration-[#ffca78] decoration-4 underline-offset-6">complex ideas</span> into <span className="italic font-serif font-normal">scalable digital products.</span>
          </motion.h1>

          {/* Subtitle / Intro */}
          <motion.p 
            variants={itemVariants} 
            className="text-sm sm:text-base md:text-lg text-[#2b1a05]/85 max-w-[540px] mb-6 md:mb-8 leading-relaxed font-normal"
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-[2.5px] border-[#2b1a05] bg-[#efe9da] text-[#2b1a05] text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider shadow-[3.5px_3.5px_0_#2b1a05] hover:shadow-[5px_5px_0_#2b1a05] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-200"
            >
              <span>Resume PDF</span>
            </a>
          </motion.div>

          {/* Feature Micro-Badges */}
          <motion.div variants={itemVariants} className="mt-6 pt-4 border-t border-[#2b1a05]/15 flex flex-wrap items-center gap-3 text-xs font-mono text-[#2b1a05]/75 font-medium">
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







