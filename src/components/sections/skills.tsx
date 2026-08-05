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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10 bg-[var(--color-paper-white)]">
      
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="A comprehensive overview of the tools, languages, and frameworks I use to build robust digital products."
          centered
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1000px] mx-auto"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
              className={`rounded-[12px] p-8 ${category.bgColor} flex flex-col items-start shadow-sm hover:shadow-xl hover:shadow-[var(--color-deep-teal)]/10 transition-shadow duration-500`}
            >
              <div className="flex items-center gap-3 mb-6 text-[var(--color-deep-teal)]">
                {category.icon}
                <h3 className="text-[13px] font-[500] font-mono uppercase tracking-widest">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span 
                    variants={badgeVariants}
                    key={skill} 
                    className="px-4 py-2 bg-[var(--color-paper-white)] rounded-[48px] text-[15px] font-[500] text-[var(--color-charcoal-navy)] whitespace-nowrap hover:bg-[var(--color-deep-teal)] hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
