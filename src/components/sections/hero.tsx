"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/animations/grid-background";
import { Code, Cpu, LineChart, Sparkles } from "lucide-react";

export function Hero() {
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 md:pb-20">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
        
        {/* LEFT SIDE CONTENT */}
        <motion.div 
          className="w-full lg:w-[60%] flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-white/50 rounded-full"></span>
            <span className="text-sm font-semibold tracking-wider text-muted uppercase">
              Hello, I'm Saksham Gupta
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-bold leading-tight tracking-tighter mb-6 md:mb-8">
            Turning Complex Problems Into <br />
            <span className="text-gradient">Scalable Solutions.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mb-8 md:mb-10 leading-relaxed">
            Full Stack Developer specializing in modern web applications, AI-powered systems, scalable architectures, and startup-focused products. I build software that transforms ideas into real-world impact.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10 md:mb-12">
            <a href="#projects">
              <Button variant="primary">Explore Projects</Button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Download Resume</Button>
            </a>
            <a href="#contact">
              <Button variant="secondary">Hire Me</Button>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-muted">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
              Full Stack Developer
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
              AI Builder
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
              Product Creator
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE PORTRAIT / GRAPHIC */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="w-full max-w-[300px] sm:max-w-sm lg:max-w-none lg:w-[35%] relative mt-8 lg:mt-0 mx-auto lg:mx-0"
        >
          {/* Cinematic Halo Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-white/10 via-white/5 to-transparent rounded-full blur-[80px] -z-10" />
          
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-secondary-100/50 backdrop-blur-sm p-3 md:p-4 group">
            <div className="w-full h-full rounded-2xl bg-secondary-200 overflow-hidden relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80" />
              <img 
                src="/portrait.png" 
                alt="Saksham Portrait" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
