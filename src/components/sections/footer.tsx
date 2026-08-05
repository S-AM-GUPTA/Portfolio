"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-16 bg-[var(--color-charcoal-navy)] text-[var(--color-paper-white)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[24px] md:text-[32px] font-[400] font-serif text-[var(--color-card-mint)] mb-4">
            "Building the future, one solution at a time."
          </p>
        </motion.div>

        <div className="text-[var(--color-paper-white)] opacity-70 text-[14px] flex flex-col md:flex-row items-center gap-4">
          <p>© {new Date().getFullYear()} Saksham Gupta. All rights reserved.</p>
          <span className="hidden md:inline-block w-1 h-1 rounded-full bg-[var(--color-sea-foam)]" />
          <p>Engineered with Next.js & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
