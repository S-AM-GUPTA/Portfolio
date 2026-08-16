"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const projects = [
  {
    title: "QuickMate",
    subtitle: "On-Demand Helper & Task Coordination Platform",
    description: "Full-stack location-based ecosystem connecting users with verified nearby helpers for daily micro-tasks, featuring real-time tracking, chat, and automated dispatch.",
    tags: ["MERN Stack", "TypeScript", "Socket.io", "Geospatial API"],
    features: ["Geospatial Search", "Role-based Access", "Real-time Messaging"],
    gradient: "linear-gradient(135deg, #f0eae1 0%, #e2dcd3 100%)",
    image: "/qu.png",
    link: "https://quick-mate.vercel.app",
    code: "https://github.com/S-AM-GUPTA/QuickMate"
  },
  {
    title: "VaidyaVaani",
    subtitle: "AI Medical Diagnostics & Prescription Simplifier",
    description: "AI-enabled healthcare intelligence platform to demystify complex lab reports, detect medicine-interaction conflicts, and translate medical jargon into plain multilingual speech.",
    tags: ["MERN Stack", "AI APIs", "MongoDB", "NLP Processing"],
    features: ["AI Summarization", "Medicine-Conflict Detection", "Voice Synthesis"],
    gradient: "linear-gradient(135deg, #e7eae5 0%, #d8ded5 100%)",
    image: "/vv.png",
    link: "https://vaidya-vaani.vercel.app",
    code: "https://github.com/S-AM-GUPTA/VaidyaVaani"
  },
  {
    title: "BazrLink",
    subtitle: "Hyperlocal Retailer Digital Commerce Engine",
    description: "Modern digital onboarding and inventory management platform empowering traditional local merchants to launch web storefronts and engage neighborhood shoppers seamlessly.",
    tags: ["Next.js", "MongoDB", "Express", "Tailwind CSS"],
    features: ["Self-serve Onboarding", "Location-aware Discovery", "Catalogue Sync"],
    gradient: "linear-gradient(135deg, #ebe8e4 0%, #ded7cf 100%)",
    image: "/bz.png",
    link: "",
    code: "https://github.com/S-AM-GUPTA/BazrLink"
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth horizontal scroll transform across cards
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);

  return (
    <section 
      id="projects" 
      ref={containerRef} 
      className="relative h-[320vh] bg-transparent"
    >
      {/* Sticky viewport window */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div 
          style={{ x }} 
          className="flex gap-10 md:gap-16 pl-[6vw] pr-[10vw] items-center h-full will-change-transform"
        >
          {/* Section Introduction Column */}
          <div className="shrink-0 w-[clamp(280px,42vw,480px)] pr-[clamp(16px,3vw,36px)] flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[12px] font-mono tracking-widest uppercase text-[var(--color-ink-navy)] bg-[var(--color-card-mint)] px-3 py-1 rounded-full font-medium">
                Portfolio
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-[var(--color-charcoal-navy)] leading-[1.05] tracking-tight mb-6">
              Selected <br className="hidden sm:inline" />Works.
            </h2>
            
            <p className="text-base sm:text-lg text-[var(--color-charcoal-navy)] opacity-80 leading-relaxed max-w-[420px] mb-8 font-normal">
              A curated collection of my full-stack and AI-driven applications, designed for real-world usability, performance, and clean scalable architecture.
            </p>

            <div className="inline-flex items-center gap-3 text-sm font-mono text-[var(--color-ink-navy)] opacity-60">
              <span className="animate-pulse">Scroll down to explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Horizontal Project Cards */}
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="w-[85vw] max-w-[860px] shrink-0 relative group"
            >
              <div className="bg-[var(--color-paper-white)]/90 backdrop-blur-md border border-black/10 rounded-[28px] p-6 sm:p-8 md:p-10 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[var(--color-deep-teal)]/15 transition-all duration-500 flex flex-col gap-6">
                
                {/* Image Mockup Showcase */}
                <div 
                  className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-[20px] overflow-hidden relative flex items-center justify-center p-4 sm:p-8 md:p-10 border border-black/5"
                  style={{ background: project.gradient }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain sm:object-cover rounded-[14px] shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  />
                </div>

                {/* Card Information */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-mono text-[var(--color-deep-teal)] uppercase tracking-wider font-semibold">
                        0{index + 1} — {project.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[var(--color-charcoal-navy)] tracking-tight mt-1">
                        {project.title}
                      </h3>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-2 self-start sm:self-center">
                      {project.code && (
                        <a 
                          href={project.code} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[var(--color-card-mint)]/40 hover:bg-[var(--color-card-mint)] text-[var(--color-charcoal-navy)] text-xs font-mono font-medium transition-all hover:scale-105 active:scale-95"
                          aria-label="View Source Code"
                        >
                          <GithubIcon />
                          <span className="hidden sm:inline">Code</span>
                        </a>
                      )}
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-deep-teal)] text-white text-xs font-mono font-medium hover:bg-[var(--color-forest-floor)] shadow-md shadow-[var(--color-deep-teal)]/20 transition-all hover:scale-105 active:scale-95"
                          aria-label="Visit Live Demo"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[var(--color-charcoal-navy)] opacity-80 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Highlights and Tags */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-black/5">
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span 
                          key={feature} 
                          className="text-[11px] font-medium text-[var(--color-ink-navy)] bg-black/5 px-2.5 py-1 rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[11px] font-mono text-[var(--color-deep-teal)] font-semibold"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

