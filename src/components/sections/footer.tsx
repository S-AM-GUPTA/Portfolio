"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-3xl font-bold tracking-tight text-gradient mb-4">
            "Building the future, one solution at a time."
          </p>
        </motion.div>

        <div className="text-muted text-sm flex flex-col md:flex-row items-center gap-4">
          <p>© {new Date().getFullYear()} Saksham Gupta. All rights reserved.</p>
          <span className="hidden md:inline-block w-1 h-1 rounded-full bg-white/20" />
          <p>Engineered with Next.js & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
