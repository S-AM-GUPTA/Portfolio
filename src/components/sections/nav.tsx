"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-[#faf7f3]/90 backdrop-blur-md border-b-[2.5px] border-[#2b1a05] py-3.5 shadow-sm" 
          : "bg-transparent py-5",
        isOpen ? "bg-[#faf7f3]" : ""
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-serif font-bold tracking-tight flex items-center gap-3 relative z-50 group">
          <div className="w-10 h-10 rounded-full border-[2px] border-[#2b1a05] bg-[#ffca78] flex items-center justify-center shadow-[2px_2px_0_#2b1a05] overflow-hidden group-hover:rotate-12 transition-transform">
            <img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain filter brightness-0" />
          </div>
          <span className={cn(
            "font-serif italic font-medium transition-colors duration-200",
            scrolled ? "text-[#2b1a05]" : "text-[#faf7f3] drop-shadow-sm"
          )}>
            Saksham Gupta
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className={cn(
          "hidden md:flex items-center gap-1.5 rounded-full p-1.5 backdrop-blur-md transition-all duration-300 border-[2px]",
          scrolled 
            ? "bg-[#efe9da]/90 border-[#2b1a05]/20 shadow-[2px_2px_0_rgba(43,26,5,0.08)]" 
            : "bg-[#140d06]/80 border-[#ffca78]/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        )}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-xs font-mono font-bold tracking-wider uppercase transition-all rounded-full px-4 py-2 border border-transparent",
                scrolled 
                  ? "text-[#2b1a05] hover:bg-[#ffca78] hover:border-[#2b1a05]/30" 
                  : "text-[#faf7f3] hover:text-[#2b1a05] hover:bg-[#ffca78]"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Get in Touch CTA */}
        <a 
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#ffca78] hover:bg-[#2b1a05] text-[#2b1a05] hover:text-[#ffca78] border-[2px] border-[#2b1a05] shadow-[3px_3px_0_#2b1a05] hover:shadow-[5px_5px_0_#ffca78] hover:-translate-y-0.5 transition-all duration-200 relative z-50 cursor-pointer"
        >
          <span>Get in Touch</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
        </a>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-full border-[2px] border-[#2b1a05] bg-[#ffca78] text-[#2b1a05] shadow-[2px_2px_0_#2b1a05] relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#faf7f3] border-b-[2.5px] border-[#2b1a05] py-6 px-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-mono uppercase tracking-widest font-semibold text-[#2b1a05] hover:bg-[#ffca78] p-3 rounded-xl border border-[#2b1a05]/10 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-block text-center w-full px-5 py-3 mt-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#2b1a05] text-[#ffca78] border-[2px] border-[#2b1a05] shadow-[3px_3px_0_#2b1a05]"
          >
            Get in Touch
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}

