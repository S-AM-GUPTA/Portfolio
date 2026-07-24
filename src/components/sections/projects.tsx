"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const projects = [
  {
    title: "QuickMate",
    description: "Full-stack, location-based platform connecting users with nearby helpers for daily tasks.",
    tags: ["MERN Stack", "TypeScript", "Socket.io", "MongoDB"],
    features: ["Geospatial Search", "Role-based Access", "Real-time Messaging"],
    color: "from-white/10 to-white/5",
    image: "/qu.png",
    link: "https://quick-mate.vercel.app",
    code: "https://github.com/S-AM-GUPTA/QuickMate"
  },
  {
    title: "VaidyaVaani",
    description: "AI-enabled platform to simplify medical reports and prescriptions for everyday users.",
    tags: ["MERN Stack", "AI APIs", "MongoDB"],
    features: ["AI Summarization Pipeline", "Medicine-Conflict Detection"],
    color: "from-white/10 to-transparent",
    image: "/vv.png",
    link: "https://vaidya-vaani.vercel.app",
    code: "https://github.com/S-AM-GUPTA/VaidyaVaani"
  },
  {
    title: "BazrLink",
    description: "A concept platform helping local retailers establish an online presence.",
    tags: ["MERN Stack", "MongoDB"],
    features: ["Self-serve Onboarding", "Location-aware Discovery"],
    color: "from-white/5 to-white/10",
    image: "/bz.png",
    link: "",
    code: "https://github.com/S-AM-GUPTA/BazrLink"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Featured Work" 
          subtitle="A selection of my best projects, focusing on scalable architectures, AI integrations, and real-world impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <TiltCard className="h-full group">
                <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${project.color} border border-white/5 mb-6 relative overflow-hidden flex items-center justify-center group/img`}>
                   {project.image ? (
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                   ) : (
                     <>
                       {/* Abstract Placeholder for Project Image */}
                       <div className="absolute inset-0 bg-black/20 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500" />
                       <h3 className="text-3xl font-black text-white/80 z-10 tracking-tighter mix-blend-overlay">
                         {project.title.substring(0, 2).toUpperCase()}
                       </h3>
                     </>
                   )}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    {project.code && (
                      <a href={project.code} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-foreground transition-colors" aria-label="View Source">
                        <GithubIcon />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-foreground transition-colors" aria-label="Visit Site">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map(feature => (
                    <span key={feature} className="text-xs font-medium text-foreground/80 bg-white/5 px-2 py-1 rounded">
                      ✓ {feature}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10 w-full">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-white/50">
                      #{tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
