"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-16 px-6 md:px-12 bg-transparent text-[#2b1a05]">
      <div className="container mx-auto max-w-5xl rounded-3xl border-[3px] border-[#2b1a05] bg-[#2b1a05] p-10 md:p-14 text-[#ffca78] shadow-[8px_8px_0_rgba(43,26,5,0.25)] flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="font-hand text-2xl text-[#ffca78]/80 font-bold block mb-2">✦ Designed & Engineered with Care</span>
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#ffca78]">
            "Building design-led digital products, one line of code at a time."
          </p>
        </motion.div>

        <div className="text-xs font-mono text-[#ffca78]/70 flex flex-col md:flex-row items-center gap-3 pt-6 border-t border-[#ffca78]/20 w-full justify-between">
          <p>© {new Date().getFullYear()} Saksham Gupta. All rights reserved.</p>
          <p className="font-hand text-base text-[#ffca78]">Built with Next.js, Tailwind & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}

