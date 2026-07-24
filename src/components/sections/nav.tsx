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
      setScrolled(window.scrollY > 50);
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
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-background/90 backdrop-blur-md border-white/10 py-4 shadow-lg" 
          : "bg-background/80 backdrop-blur-sm border-white/5 py-6",
        isOpen ? "bg-background" : ""
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter text-foreground flex items-center gap-3 relative z-50">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
          <span>Saksham Gupta</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a 
          href="#contact"
          className="hidden md:inline-flex px-5 py-2 rounded-full text-sm font-medium border border-white/10 hover:bg-white/5 transition-colors relative z-50"
        >
          Let's Talk
        </a>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-background border-b border-white/10 py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-foreground hover:text-accent-blue transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-block text-center w-full px-5 py-3 mt-4 rounded-full text-base font-medium bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            Let's Talk
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
