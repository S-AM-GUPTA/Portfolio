"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Layout, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Framer Motion"],
    bgColor: "bg-[var(--color-card-mint)]"
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.io"],
    bgColor: "bg-[var(--color-blush-sand)]"
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
    bgColor: "bg-[var(--color-card-mint)]"
  },
  {
    title: "Languages & Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["JavaScript", "TypeScript", "Python", "C", "Git", "Docker", "Postman", "Vercel"],
    bgColor: "bg-[var(--color-sea-foam)]"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10 bg-[var(--color-paper-white)]">
      
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="A comprehensive overview of the tools, languages, and frameworks I use to build robust digital products."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1000px] mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-[12px] p-8 ${category.bgColor} flex flex-col items-start`}
            >
              <div className="flex items-center gap-3 mb-6 text-[var(--color-deep-teal)]">
                {category.icon}
                <h3 className="text-[13px] font-[500] font-mono uppercase tracking-widest">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-[var(--color-paper-white)] rounded-[48px] text-[15px] font-[500] text-[var(--color-charcoal-navy)] whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
