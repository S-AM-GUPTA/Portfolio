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

  // Smooth horizontal scroll transform allowing last card to fully reach view
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section 
      id="projects" 
      ref={containerRef} 
      className="relative h-[320vh] bg-transparent"
    >
      {/* Sticky viewport window with dynamic mobile viewport height */}
      <div className="sticky top-0 h-[100dvh] flex items-center overflow-hidden pt-16 pb-4 sm:pt-20 sm:pb-8">
        <motion.div 
          style={{ x }} 
          className="flex gap-6 sm:gap-10 md:gap-14 pl-[5vw] sm:pl-[7vw] pr-[25vw] sm:pr-[15vw] items-center h-full will-change-transform"
        >
          {/* Section Introduction Column */}
          <div className="shrink-0 w-[240px] sm:w-[clamp(260px,34vw,400px)] pr-3 sm:pr-[clamp(12px,2vw,28px)] flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#2b1a05] bg-[#ffca78] border border-[#2b1a05]/30 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-semibold shadow-[2px_2px_0_#2b1a05]">
                ✦ Portfolio Works
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#2b1a05] leading-[1.05] tracking-tight mb-2 sm:mb-4">
              Featured <br />
              <span className="italic font-normal underline decoration-[#ffca78] decoration-4 underline-offset-4 sm:underline-offset-6">Products.</span>
            </h2>
            
            <p className="text-xs sm:text-base text-[#2b1a05]/80 leading-relaxed max-w-[340px] mb-4 sm:mb-6 font-normal">
              A curated collection of full-stack web applications and AI systems engineered for real-world reliability and intuitive interaction.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#2b1a05] font-semibold">
              <span className="animate-pulse font-hand text-base sm:text-lg">✦ scroll to slide</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>

          {/* Horizontal Project Cards */}
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="w-[84vw] sm:w-[65vw] max-w-[620px] shrink-0 relative group"
            >
              <div className="p-3.5 sm:p-5 lg:p-6 rounded-2xl border-[2.5px] sm:border-[3px] border-[#2b1a05] bg-[#faf7f3] shadow-[5px_5px_0_#2b1a05] sm:shadow-[7px_7px_0_#2b1a05] transition-all duration-300 group-hover:shadow-[9px_9px_0_#2b1a05] group-hover:-translate-y-0.5 flex flex-col gap-2.5 sm:gap-3.5 max-h-[calc(100dvh-110px)] sm:max-h-[75vh] overflow-hidden">
                
                {/* Sleek Image Mockup Frame */}
                <div 
                  className="w-full aspect-[16/9] max-h-[20vh] sm:max-h-[28vh] rounded-xl overflow-hidden relative flex items-center justify-center p-2.5 sm:p-4 border-[2px] sm:border-[2.5px] border-[#2b1a05] shadow-inner bg-gradient-to-br from-[#ffe3b0] via-[#faf7f3] to-[#efe9da]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain rounded-[6px] sm:rounded-[8px] shadow-md sm:shadow-lg border border-[#2b1a05]/20 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  />
                </div>

                {/* Card Information */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <div className="flex items-start sm:items-center justify-between gap-2">
                    <div className="flex flex-col min-w-0">
                      <span className="text-[9px] sm:text-[11px] font-mono text-[#2b1a05]/60 uppercase tracking-widest font-bold truncate">
                        0{index + 1} // {project.subtitle}
                      </span>
                      <h3 className="text-lg sm:text-2xl md:text-3xl font-serif text-[#2b1a05] tracking-tight mt-0.5 font-medium leading-tight truncate">
                        {project.title}
                      </h3>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
                      {project.code && (
                        <a 
                          href={project.code} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#efe9da] hover:bg-[#ffca78] text-[#2b1a05] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 border-[1.5px] sm:border-[2px] border-[#2b1a05] shadow-[2px_2px_0_#2b1a05]"
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
                          className="inline-flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#2b1a05] text-[#ffca78] hover:bg-[#ffca78] hover:text-[#2b1a05] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider border-[1.5px] sm:border-[2px] border-[#2b1a05] shadow-[2px_2px_0_#ffca78] transition-all hover:scale-105 active:scale-95"
                          aria-label="Visit Live Demo"
                        >
                          <span>Demo</span>
                          <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-[11px] sm:text-sm text-[#2b1a05]/80 leading-snug sm:leading-relaxed font-normal line-clamp-2">
                    {project.description}
                  </p>

                  {/* Highlights and Tags */}
                  <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 pt-2 sm:pt-3 border-t border-[#2b1a05]/10">
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {project.features.map((feature) => (
                        <span 
                          key={feature} 
                          className="text-[8.5px] sm:text-[10px] font-mono font-semibold text-[#2b1a05] bg-[#efe9da] border border-[#2b1a05]/20 px-2 py-0.5 rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[9px] sm:text-[11px] font-mono text-[#2b1a05]/70 font-semibold"
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



