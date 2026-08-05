"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const projects = [
  {
    title: "QuickMate",
    description: "Full-stack, location-based platform connecting users with nearby helpers for daily tasks.",
    tags: ["MERN Stack", "TypeScript", "Socket.io"],
    features: ["Geospatial Search", "Role-based Access", "Real-time Messaging"],
    bgColor: "bg-[var(--color-card-mint)]",
    image: "/qu.png",
    link: "https://quick-mate.vercel.app",
    code: "https://github.com/S-AM-GUPTA/QuickMate"
  },
  {
    title: "VaidyaVaani",
    description: "AI-enabled platform to simplify medical reports and prescriptions for everyday users.",
    tags: ["MERN Stack", "AI APIs", "MongoDB"],
    features: ["AI Summarization", "Medicine-Conflict Detection"],
    bgColor: "bg-[var(--color-blush-sand)]",
    image: "/vv.png",
    link: "https://vaidya-vaani.vercel.app",
    code: "https://github.com/S-AM-GUPTA/VaidyaVaani"
  },
  {
    title: "BazrLink",
    description: "A concept platform helping local retailers establish an online presence.",
    tags: ["MERN Stack", "MongoDB"],
    features: ["Self-serve Onboarding", "Location-aware Discovery"],
    bgColor: "bg-[var(--color-sea-foam)]",
    image: "/bz.png",
    link: "",
    code: "https://github.com/S-AM-GUPTA/BazrLink"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)", scale: 0.95 },
  visible: {
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

export function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10 bg-[var(--color-paper-white)]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Featured Work" 
          subtitle="A selection of my best projects, focusing on scalable architectures, AI integrations, and real-world impact."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
              className={`h-full rounded-[12px] ${project.bgColor} p-6 flex flex-col shadow-sm hover:shadow-2xl hover:shadow-[var(--color-deep-teal)]/20 transition-shadow duration-500`}
            >
              <div className="w-full h-64 rounded-[8px] bg-[var(--color-paper-white)] mb-6 relative overflow-hidden group flex items-center justify-center p-4">
                 {project.image ? (
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                   />
                 ) : (
                   <div className="absolute inset-0 flex items-center justify-center">
                     <h3 className="text-3xl font-[500] font-serif text-[var(--color-ink-navy)] tracking-tighter">
                       {project.title.substring(0, 2).toUpperCase()}
                     </h3>
                   </div>
                 )}
              </div>

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[24px] font-[500] font-serif text-[var(--color-charcoal-navy)] leading-[1.2]">{project.title}</h3>
                <div className="flex items-center gap-2">
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-[var(--color-paper-white)] text-[var(--color-ink-navy)] transition-colors hover:scale-110 active:scale-95" aria-label="View Source">
                      <GithubIcon />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-[var(--color-paper-white)] text-[var(--color-ink-navy)] transition-colors hover:scale-110 active:scale-95" aria-label="Visit Site">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[16px] text-[var(--color-charcoal-navy)] opacity-80 mb-6 flex-grow leading-[1.6]">
                {project.description}
              </p>

              <div className="flex flex-col gap-4 mt-auto border-t border-[var(--color-paper-white)] pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.features.map(feature => (
                    <span key={feature} className="text-[12px] font-[500] text-[var(--color-ink-navy)] bg-[var(--color-paper-white)] px-2 py-1 rounded-[4px] hover:bg-[var(--color-deep-teal)] hover:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[12px] font-mono text-[var(--color-deep-teal)] uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
