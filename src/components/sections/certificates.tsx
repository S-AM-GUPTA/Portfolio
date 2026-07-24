"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/card";
import { Search, Download, Eye } from "lucide-react";

const certificates = [
  { 
    id: 1, 
    title: "Career Essentials in Software Development", 
    category: "Microsoft & LinkedIn", 
    date: "2024",
    file: "/certificates/CertificateOfCompletion_Career Essentials in Software Development by Microsoft and LinkedIn.pdf" 
  },
  { 
    id: 2, 
    title: "Codechef BCS301: Data Structures", 
    category: "Academics", 
    date: "2024",
    file: "/certificates/abit231540097-BCS301_ Data structures.pdf" 
  },
  { 
    id: 3, 
    title: "Claude Code in Action", 
    category: "Anthropic", 
    date: "2024",
    file: "/certificates/certificate-njdie2f3sief-1774159240.pdf" 
  },
  { 
    id: 4, 
    title: "Ethics in the Age of Generative AI", 
    category: "LinkedIn Learning", 
    date: "2024",
  },
  { 
    id: 5, 
    title: "Network Fundamentals", 
    category: "Infosys Springboard", 
    date: "2024",
  },
];

const categories = ["All", "Microsoft & LinkedIn", "Academics", "Anthropic", "LinkedIn Learning", "Infosys Springboard"];

export function Certificates() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = certificates.filter(cert => {
    const matchCategory = filter === "All" || cert.category === filter;
    const matchSearch = cert.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section id="certificates" className="py-12 md:py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Certifications & Awards" 
          subtitle="Continuous learning and recognition from the tech community."
        />

        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          
          {/* Categories */}
          <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === cat 
                    ? "bg-accent-blue text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                    : "bg-white/5 text-muted hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input 
              type="text" 
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-secondary-200/50 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-foreground focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/50 transition-all"
            />
          </div>

        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map(cert => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard className="h-full flex flex-col group p-0 overflow-hidden">
                  <div className="h-48 bg-white/5 relative flex items-center justify-center overflow-hidden border-b border-white/10">
                    {cert.file ? (
                      <>
                        <iframe 
                          src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                          className="absolute inset-0 w-full h-full pointer-events-none border-none scale-[1.02] bg-white"
                          scrolling="no"
                          tabIndex={-1}
                        />
                        
                        {/* Hover actions overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm z-10">
                          <a 
                            href={cert.file} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors text-white"
                            title="View Certificate"
                          >
                            <Eye className="w-5 h-5" />
                          </a>
                          <a 
                            href={cert.file} 
                            download 
                            className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors text-white"
                            title="Download Certificate"
                          >
                            <Download className="w-5 h-5" />
                          </a>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-muted/50">
                        <span className="text-4xl mb-2">🎓</span>
                        <span className="text-sm font-medium tracking-wide uppercase">Verified</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs font-semibold tracking-wider text-accent-blue mb-2 uppercase">{cert.category}</div>
                    <h3 className="text-lg font-bold text-foreground mb-4">{cert.title}</h3>
                    <div className="mt-auto text-sm text-muted">{cert.date}</div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted">
            No certificates found matching your criteria.
          </div>
        )}

      </div>
    </section>
  );
}
