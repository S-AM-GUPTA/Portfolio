"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Labmentix",
    role: "Web Development Intern",
    date: "2024 - Present",
    description: "Developing scalable web applications, optimizing frontend performance, and contributing to the core product architecture. Collaborating with cross-functional teams to integrate AI capabilities into the platform.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  // Add more experiences here if needed
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My journey in the industry, building products and contributing to teams."
        />

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10" />
              
              <div className="flex flex-col md:flex-row gap-8 items-start relative">
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex flex-col items-center mt-1">
                  <div className="w-12 h-12 rounded-full bg-secondary-200 border border-white/10 flex items-center justify-center z-10 relative">
                    <Briefcase className="w-5 h-5 text-accent-purple" />
                    <div className="absolute inset-0 rounded-full border border-accent-purple/50 animate-ping opacity-20" />
                  </div>
                  <div className="w-px h-full bg-white/10 my-4" />
                </div>

                {/* Timeline Dot (Mobile) */}
                <div className="md:hidden absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-accent-purple shadow-[0_0_10px_#8b5cf6]" />

                {/* Content */}
                <div className="flex-1 bg-secondary-100/50 backdrop-blur-sm border border-white/5 p-6 md:p-8 rounded-2xl hover:border-white/10 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent-purple transition-colors">{exp.role}</h3>
                      <h4 className="text-lg font-medium text-muted">{exp.company}</h4>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm font-medium text-muted whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>
                  
                  <p className="text-muted/80 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-md bg-secondary-200 border border-white/5 text-xs font-medium text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
