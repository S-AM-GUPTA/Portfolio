"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { AuthModal } from "@/components/ui/auth-modal";
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
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.authenticated) {
          setUserEmail(data.user.email);
        }
      })
      .catch(() => {});
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setUserEmail(null);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-[var(--color-paper-white)]/95 backdrop-blur-md border-b border-[var(--color-card-mint)] py-4" 
            : "bg-transparent py-6",
          isOpen ? "bg-[var(--color-paper-white)]" : ""
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tighter text-[var(--color-charcoal-navy)] flex items-center gap-3 relative z-50">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain filter brightness-0" />
            <span>Saksham Gupta</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[14px] font-[400] text-[var(--color-charcoal-navy)] hover:text-[var(--color-deep-teal)] transition-colors rounded-full px-4 py-2 hover:bg-[var(--color-card-mint)]"
              >
                {item.name}
              </a>
            ))}
            
            {userEmail ? (
              <button onClick={handleLogout} className="text-[14px] font-[500] text-[var(--color-charcoal-navy)] hover:text-[var(--color-deep-teal)]">Logout</button>
            ) : (
              <button onClick={() => setIsAuthModalOpen(true)} className="text-[14px] font-[500] text-[var(--color-charcoal-navy)] hover:text-[var(--color-deep-teal)]">Sign In</button>
            )}
          </nav>

          {/* Sign Up / Let's Talk CTA */}
          <a 
            href="#contact"
            className="hidden md:inline-flex px-6 py-2.5 rounded-[48px] text-[14px] font-[500] bg-[var(--color-deep-teal)] hover:bg-[var(--color-forest-floor)] text-white transition-colors relative z-50"
          >
            Hire Me
          </a>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-[var(--color-charcoal-navy)] relative z-50"
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
            className="absolute top-full left-0 w-full bg-[var(--color-paper-white)] border-b border-[var(--color-card-mint)] py-6 px-6 flex flex-col gap-6 md:hidden shadow-lg"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-[500] text-[var(--color-charcoal-navy)] hover:text-[var(--color-deep-teal)] transition-colors"
              >
                {item.name}
              </a>
            ))}

            {userEmail ? (
              <button onClick={() => { handleLogout(); setIsOpen(false); }} className="text-lg font-[500] text-left text-[var(--color-charcoal-navy)] hover:text-[var(--color-deep-teal)] transition-colors">Logout</button>
            ) : (
              <button onClick={() => { setIsAuthModalOpen(true); setIsOpen(false); }} className="text-lg font-[500] text-left text-[var(--color-charcoal-navy)] hover:text-[var(--color-deep-teal)] transition-colors">Sign In</button>
            )}

            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block text-center w-full px-5 py-3 mt-4 rounded-[48px] text-base font-[500] bg-[var(--color-deep-teal)] hover:bg-[var(--color-forest-floor)] text-white transition-colors"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </motion.header>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={(email) => setUserEmail(email)}
      />
    </>
  );
}

