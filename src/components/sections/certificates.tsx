"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Search, Download, Eye } from "lucide-react";

const certificates = [
  { 
    id: 1, 
    title: "Career Essentials in Software Development", 
    category: "Microsoft & LinkedIn", 
    date: "2024",
    file: "/certificates/CertificateOfCompletion_Career Essentials in Software Development by Microsoft and LinkedIn.pdf",
    bgColor: "bg-[var(--color-card-mint)]"
  },
  { 
    id: 2, 
    title: "Codechef BCS301: Data Structures", 
    category: "Academics", 
    date: "2024",
    file: "/certificates/abit231540097-BCS301_ Data structures.pdf",
    bgColor: "bg-[var(--color-blush-sand)]"
  },
  { 
    id: 3, 
    title: "Claude Code in Action", 
    category: "Anthropic", 
    date: "2024",
    file: "/certificates/certificate-njdie2f3sief-1774159240.pdf",
    bgColor: "bg-[var(--color-sea-foam)]"
  },
  { 
    id: 4, 
    title: "Ethics in the Age of Generative AI", 
    category: "LinkedIn Learning", 
    date: "2024",
    bgColor: "bg-[var(--color-card-mint)]"
  },
  { 
    id: 5, 
    title: "Network Fundamentals", 
    category: "Infosys Springboard", 
    date: "2024",
    bgColor: "bg-[var(--color-blush-sand)]"
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
    <section id="certificates" className="py-20 relative z-10 bg-[var(--color-paper-white)]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Certifications" 
          subtitle="Continuous learning and recognition from the tech community."
        />

        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          
          {/* Categories */}
          <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-[14px] font-[500] whitespace-nowrap transition-colors ${
                  filter === cat 
                    ? "bg-[var(--color-deep-teal)] text-white" 
                    : "bg-[var(--color-card-mint)] text-[var(--color-charcoal-navy)] hover:bg-[var(--color-sea-foam)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-charcoal-navy)] opacity-50" />
            <input 
              type="text" 
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[var(--color-card-mint)] border border-transparent rounded-[48px] pl-10 pr-4 py-2 text-[14px] text-[var(--color-charcoal-navy)] placeholder:text-[var(--color-charcoal-navy)] placeholder:opacity-50 focus:outline-none focus:border-[var(--color-deep-teal)] transition-all"
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
                <div className={`h-full flex flex-col group p-0 overflow-hidden rounded-[12px] ${cert.bgColor || 'bg-[var(--color-card-mint)]'}`}>
                  <div className="h-48 bg-[var(--color-paper-white)] relative flex items-center justify-center overflow-hidden m-4 mb-0 rounded-[8px]">
                    {cert.file ? (
                      <>
                        <iframe 
                          src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                          className="absolute inset-0 w-full h-full pointer-events-none border-none scale-[1.02] bg-white"
                          scrolling="no"
                          tabIndex={-1}
                        />
                        
                        {/* Hover actions overlay */}
                        <div className="absolute inset-0 bg-[var(--color-charcoal-navy)]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm z-10 rounded-[8px]">
                          <a 
                            href={cert.file} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="p-3 bg-white/20 rounded-full hover:bg-[var(--color-deep-teal)] text-white transition-colors"
                            title="View Certificate"
                          >
                            <Eye className="w-5 h-5" />
                          </a>
                          <a 
                            href={cert.file} 
                            download 
                            className="p-3 bg-white/20 rounded-full hover:bg-[var(--color-deep-teal)] text-white transition-colors"
                            title="Download Certificate"
                          >
                            <Download className="w-5 h-5" />
                          </a>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-[var(--color-charcoal-navy)] opacity-50">
                        <span className="text-4xl mb-2">🎓</span>
                        <span className="text-[12px] font-[500] font-mono tracking-widest uppercase text-[var(--color-deep-teal)]">Verified</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-[12px] font-mono tracking-widest text-[var(--color-deep-teal)] mb-2 uppercase">{cert.category}</div>
                    <h3 className="text-[20px] font-[500] font-serif text-[var(--color-charcoal-navy)] leading-[1.2] mb-4">{cert.title}</h3>
                    <div className="mt-auto text-[14px] font-[500] text-[var(--color-charcoal-navy)] opacity-60">{cert.date}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filtered.length === 0 && (
          <div className="text-center py-20 text-[var(--color-charcoal-navy)] opacity-60 text-[16px]">
            No certificates found matching your criteria.
          </div>
        )}

      </div>
    </section>
  );
}
