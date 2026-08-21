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

  // Smooth horizontal scroll transform across 5 certificate cards allowing full view of last card
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section 
      id="certificates" 
      ref={containerRef} 
      className="relative h-[400vh] bg-transparent"
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
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#2b1a05] bg-[#cbb8d9] border border-[#2b1a05]/30 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-semibold shadow-[2px_2px_0_#2b1a05]">
                ✦ Credentials
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#2b1a05] leading-[1.05] tracking-tight mb-2 sm:mb-4">
              Verified <br />
              <span className="italic font-normal underline decoration-[#cbb8d9] decoration-4 underline-offset-4 sm:underline-offset-6">Certificates.</span>
            </h2>
            
            <p className="text-xs sm:text-base text-[#2b1a05]/80 leading-relaxed max-w-[340px] mb-4 sm:mb-6 font-normal">
              Continuous learning and verified technical proficiency from industry leaders and recognized academic institutions.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#2b1a05] font-semibold">
              <span className="animate-pulse font-hand text-base sm:text-lg">✦ scroll to slide</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>

          {/* Horizontal Certificate Cards */}
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="w-[84vw] sm:w-[62vw] max-w-[620px] shrink-0 relative group"
            >
              <div className="p-3.5 sm:p-5 lg:p-6 rounded-2xl border-[2.5px] sm:border-[3px] border-[#2b1a05] bg-[#faf7f3] shadow-[5px_5px_0_#2b1a05] sm:shadow-[7px_7px_0_#2b1a05] transition-all duration-300 group-hover:shadow-[9px_9px_0_#2b1a05] group-hover:-translate-y-0.5 flex flex-col gap-2.5 sm:gap-3.5 max-h-[calc(100dvh-110px)] sm:max-h-[75vh] overflow-hidden">
                
                {/* Certificate Preview Frame */}
                <div 
                  className="w-full aspect-[16/9] max-h-[20vh] sm:max-h-[28vh] rounded-xl overflow-hidden relative flex items-center justify-center p-2.5 sm:p-4 border-[2px] sm:border-[2.5px] border-[#2b1a05] shadow-inner bg-gradient-to-br from-[#ffe3b0] via-[#faf7f3] to-[#efe9da]"
                >
                  {cert.file ? (
                    <div className="w-full h-full relative rounded-[6px] sm:rounded-[8px] overflow-hidden bg-white border border-[#2b1a05]/20 shadow-md flex items-center justify-center">
                      <iframe 
                        src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                        className="w-full h-full pointer-events-none border-none scale-[1.02] bg-white"
                        scrolling="no"
                        tabIndex={-1}
                        title={cert.title}
                      />
                      
                      {/* Hover Overlay Buttons */}
                      <div className="absolute inset-0 bg-[#2b1a05]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 backdrop-blur-xs z-10">
                        <a 
                          href={cert.file} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-2.5 sm:p-3 bg-[#ffca78] hover:bg-white text-[#2b1a05] rounded-full border-[2px] border-[#2b1a05] shadow-[2px_2px_0_#2b1a05] transition-all hover:scale-110 active:scale-95"
                          title="View Certificate Fullscreen"
                        >
                          <Eye className="w-4 h-4" />
                        </a>
                        <a 
                          href={cert.file} 
                          download 
                          className="p-2.5 sm:p-3 bg-[#faf7f3] hover:bg-[#ffca78] text-[#2b1a05] rounded-full border-[2px] border-[#2b1a05] shadow-[2px_2px_0_#2b1a05] transition-all hover:scale-110 active:scale-95"
                          title="Download Certificate PDF"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center p-4 sm:p-6 text-[#2b1a05]">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ffca78] border-[2px] border-[#2b1a05] flex items-center justify-center mb-1.5 shadow-[2px_2px_0_#2b1a05]">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#2b1a05]" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#2b1a05] uppercase">Verified Credential</span>
                      <h4 className="text-sm sm:text-base font-serif font-medium mt-0.5 text-[#2b1a05]">{cert.title}</h4>
                    </div>
                  )}
                </div>

                {/* Card Information */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <div className="flex items-start sm:items-center justify-between gap-2">
                    <div className="flex flex-col min-w-0">
                      <span className="text-[9px] sm:text-[11px] font-mono text-[#2b1a05]/60 uppercase tracking-widest font-bold truncate">
                        0{index + 1} // {cert.issuer}
                      </span>
                      <h3 className="text-base sm:text-xl md:text-2xl font-serif text-[#2b1a05] tracking-tight mt-0.5 font-medium leading-tight truncate">
                        {cert.title}
                      </h3>
                    </div>

                    {/* Action Links */}
                    {cert.file && (
                      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                        <a 
                          href={cert.file} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#efe9da] hover:bg-[#ffca78] text-[#2b1a05] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 border-[1.5px] sm:border-[2px] border-[#2b1a05] shadow-[2px_2px_0_#2b1a05]"
                          aria-label="View Fullscreen"
                        >
                          <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>View</span>
                        </a>
                        <a 
                          href={cert.file} 
                          download
                          className="inline-flex items-center gap-1 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#2b1a05] text-[#ffca78] hover:bg-[#ffca78] hover:text-[#2b1a05] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider border-[1.5px] sm:border-[2px] border-[#2b1a05] shadow-[2px_2px_0_#ffca78] transition-all hover:scale-105 active:scale-95"
                          aria-label="Download PDF"
                        >
                          <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>PDF</span>
                        </a>
                      </div>
                    )}
                  </div>

                  <p className="text-[11px] sm:text-sm text-[#2b1a05]/80 leading-snug sm:leading-relaxed font-normal line-clamp-2">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-[#2b1a05]/10 text-[10px] sm:text-xs font-mono text-[#2b1a05]/70">
                    <span>Issued {cert.date}</span>
                    <span className="text-[#2b1a05] font-bold">✦ Verified</span>
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



