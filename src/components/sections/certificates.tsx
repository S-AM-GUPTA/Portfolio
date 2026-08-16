"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Eye, ArrowRight, Award } from "lucide-react";

const certificates = [
  { 
    id: 1, 
    title: "Career Essentials in Software Development", 
    issuer: "Microsoft & LinkedIn", 
    date: "2024",
    description: "Core professional foundation in full-stack architecture, software lifecycle, cloud services, and production engineering practices.",
    file: "/certificates/CertificateOfCompletion_Career Essentials in Software Development by Microsoft and LinkedIn.pdf",
    gradient: "linear-gradient(135deg, #f0eae1 0%, #e2dcd3 100%)",
  },
  { 
    id: 2, 
    title: "Codechef BCS301: Data Structures", 
    issuer: "Academics & Competitive Programming", 
    date: "2024",
    description: "Advanced algorithmic problem-solving, graph theory, dynamic programming, and data structure complexity optimization.",
    file: "/certificates/abit231540097-BCS301_ Data structures.pdf",
    gradient: "linear-gradient(135deg, #e7eae5 0%, #d8ded5 100%)",
  },
  { 
    id: 3, 
    title: "Claude Code in Action", 
    issuer: "Anthropic", 
    date: "2024",
    description: "Engineering prompt chains, LLM API integration, autonomous agent tool use, and generative AI reasoning workflows.",
    file: "/certificates/certificate-njdie2f3sief-1774159240.pdf",
    gradient: "linear-gradient(135deg, #ebe8e4 0%, #ded7cf 100%)",
  },
  { 
    id: 4, 
    title: "Ethics in the Age of Generative AI", 
    issuer: "LinkedIn Learning", 
    date: "2024",
    description: "Responsible AI deployment, bias mitigation, data governance, privacy compliance, and safe AI agent design.",
    gradient: "linear-gradient(135deg, #f3ece4 0%, #e5ded4 100%)",
  },
  { 
    id: 5, 
    title: "Network Fundamentals", 
    issuer: "Infosys Springboard", 
    date: "2024",
    description: "TCP/IP suite, socket routing, distributed client-server communication protocols, and cloud infrastructure security.",
    gradient: "linear-gradient(135deg, #eae5df 0%, #ddd7cf 100%)",
  },
];

export function Certificates() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth horizontal scroll transform across 5 certificate cards
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section 
      id="certificates" 
      ref={containerRef} 
      className="relative h-[380vh] bg-transparent"
    >
      {/* Sticky viewport window with top offset for navbar */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden pt-20 pb-8">
        <motion.div 
          style={{ x }} 
          className="flex gap-10 md:gap-14 pl-[7vw] pr-[12vw] items-center h-full will-change-transform"
        >
          {/* Section Introduction Column */}
          <div className="shrink-0 w-[clamp(260px,34vw,400px)] pr-[clamp(12px,2vw,28px)] flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-navy)] bg-[var(--color-card-mint)] px-3 py-1 rounded-full font-medium">
                Credentials
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-[var(--color-charcoal-navy)] leading-[1.05] tracking-tight mb-4">
              Verified <br />Certifications.
            </h2>
            
            <p className="text-sm sm:text-base text-[var(--color-charcoal-navy)] opacity-80 leading-relaxed max-w-[360px] mb-6 font-normal">
              Continuous learning and verified technical proficiency from industry leaders and academic institutions.
            </p>

            <div className="inline-flex items-center gap-2.5 text-xs font-mono text-[var(--color-ink-navy)] opacity-60">
              <span className="animate-pulse">Scroll to explore</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Horizontal Certificate Cards */}
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="w-[74vw] sm:w-[62vw] max-w-[640px] shrink-0 relative group"
            >
              <div className="flex flex-col gap-4">
                
                {/* Certificate Preview Frame */}
                <div 
                  className="w-full aspect-[16/10] max-h-[46vh] rounded-[18px] overflow-hidden relative flex items-center justify-center p-4 sm:p-6 border border-black/10 shadow-lg shadow-black/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[var(--color-deep-teal)]/15"
                  style={{ background: cert.gradient }}
                >
                  {cert.file ? (
                    <div className="w-full h-full relative rounded-[10px] overflow-hidden bg-white shadow-xl flex items-center justify-center">
                      <iframe 
                        src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                        className="w-full h-full pointer-events-none border-none scale-[1.02] bg-white"
                        scrolling="no"
                        tabIndex={-1}
                        title={cert.title}
                      />
                      
                      {/* Hover Overlay Buttons */}
                      <div className="absolute inset-0 bg-[var(--color-charcoal-navy)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm z-10">
                        <a 
                          href={cert.file} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-3 bg-white/20 hover:bg-[var(--color-deep-teal)] text-white rounded-full transition-all hover:scale-110 active:scale-95"
                          title="View Certificate Fullscreen"
                        >
                          <Eye className="w-5 h-5" />
                        </a>
                        <a 
                          href={cert.file} 
                          download 
                          className="p-3 bg-white/20 hover:bg-[var(--color-deep-teal)] text-white rounded-full transition-all hover:scale-110 active:scale-95"
                          title="Download Certificate PDF"
                        >
                          <Download className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center p-6 text-[var(--color-charcoal-navy)]">
                      <div className="w-14 h-14 rounded-full bg-[var(--color-card-mint)] flex items-center justify-center mb-3 shadow-md">
                        <Award className="w-7 h-7 text-[var(--color-deep-teal)]" />
                      </div>
                      <span className="text-xs font-mono font-semibold tracking-wider text-[var(--color-deep-teal)] uppercase">Verified Credential</span>
                      <h4 className="text-lg font-serif font-medium mt-1 text-[var(--color-charcoal-navy)]">{cert.title}</h4>
                    </div>
                  )}
                </div>

                {/* Card Information */}
                <div className="flex flex-col gap-3 px-1">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono text-[var(--color-deep-teal)] uppercase tracking-wider font-semibold">
                        0{index + 1} — {cert.issuer}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[var(--color-charcoal-navy)] tracking-tight mt-0.5">
                        {cert.title}
                      </h3>
                    </div>

                    {/* Action Links */}
                    {cert.file && (
                      <div className="flex items-center gap-2 shrink-0">
                        <a 
                          href={cert.file} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-card-mint)]/40 hover:bg-[var(--color-card-mint)] text-[var(--color-charcoal-navy)] text-xs font-mono font-medium transition-all hover:scale-105 active:scale-95 border border-black/5"
                          aria-label="View Fullscreen"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View</span>
                        </a>
                        <a 
                          href={cert.file} 
                          download
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--color-deep-teal)] text-white text-xs font-mono font-medium hover:bg-[var(--color-forest-floor)] shadow-sm shadow-[var(--color-deep-teal)]/20 transition-all hover:scale-105 active:scale-95"
                          aria-label="Download PDF"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </a>
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--color-charcoal-navy)] opacity-75 leading-relaxed font-normal line-clamp-2">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-black/5 text-[11px] font-mono text-[var(--color-charcoal-navy)] opacity-60">
                    <span>Issued {cert.date}</span>
                    <span className="text-[var(--color-deep-teal)] font-semibold">Verified Completion</span>
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

