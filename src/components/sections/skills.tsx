"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { useState } from "react";
import { 
  Code2, FileCode2, Paintbrush, Palette, Database, Server, 
  Zap, TerminalSquare, Brackets, Cloud, GitBranch, Layout, Wrench
} from "lucide-react";

const skillsList = [
  { name: "React.js", icon: <Code2 className="w-10 h-10 text-[var(--color-deep-teal)]" />, color: "bg-[var(--color-card-mint)]" },
  { name: "Next.js", icon: <Layout className="w-10 h-10 text-[var(--color-ink-navy)]" />, color: "bg-white border border-[var(--color-mint-mist)]" },
  { name: "TypeScript", icon: <Brackets className="w-10 h-10 text-[var(--color-deep-teal)]" />, color: "bg-[var(--color-sea-foam)]" },
  { name: "JavaScript", icon: <FileCode2 className="w-10 h-10 text-[var(--color-charcoal-navy)]" />, color: "bg-[var(--color-blush-sand)]" },
  { name: "Node.js", icon: <Server className="w-10 h-10 text-[var(--color-deep-teal)]" />, color: "bg-[var(--color-card-mint)]" },
  { name: "Express.js", icon: <Zap className="w-10 h-10 text-yellow-600" />, color: "bg-white border border-[var(--color-mint-mist)]" },
  { name: "MongoDB", icon: <Database className="w-10 h-10 text-green-700" />, color: "bg-[var(--color-sea-foam)]" },
  { name: "PostgreSQL", icon: <Database className="w-10 h-10 text-[var(--color-ink-navy)]" />, color: "bg-[var(--color-card-mint)]" },
  { name: "Tailwind CSS", icon: <Palette className="w-10 h-10 text-[var(--color-deep-teal)]" />, color: "bg-[var(--color-blush-sand)]" },
  { name: "Framer Motion", icon: <Wrench className="w-10 h-10 text-purple-600" />, color: "bg-[var(--color-sea-foam)]" },
  { name: "Python", icon: <TerminalSquare className="w-10 h-10 text-[var(--color-charcoal-navy)]" />, color: "bg-white border border-[var(--color-mint-mist)]" },
  { name: "Git", icon: <GitBranch className="w-10 h-10 text-orange-600" />, color: "bg-[var(--color-card-mint)]" },
  { name: "Vercel", icon: <Cloud className="w-10 h-10 text-[var(--color-charcoal-navy)]" />, color: "bg-[var(--color-blush-sand)]" },
];

function SkillChip({ skill, index }: { skill: typeof skillsList[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring config for buttery smooth floating effect
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });
  
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    // Calculate mouse position relative to the chip's center
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, filter: "blur(10px)", scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-default"
      style={{ zIndex: isHovered ? 50 : 10 }} // Ensure hovered chip preview appears above others
    >
      <div className={`px-6 py-3 md:px-8 md:py-4 rounded-[48px] ${skill.color} shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center`}>
        <span className="text-[16px] md:text-[18px] font-[500] text-[var(--color-charcoal-navy)]">
          {skill.name}
        </span>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            style={{ 
              x: mouseXSpring, 
              y: mouseYSpring, 
              left: '50%', 
              top: '50%',
              marginLeft: '-60px', // Half of width (120px)
              marginTop: '-140px', // Position it above the cursor
            }}
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute pointer-events-none"
          >
            <div className="w-[120px] h-[120px] bg-white rounded-[24px] shadow-2xl flex items-center justify-center border-4 border-[var(--color-card-mint)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-sea-foam)]/40 to-transparent pointer-events-none" />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {skill.icon}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-[var(--color-paper-white)]">
      
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="Hover over the chips below to see a playful preview of the technologies I use every day."
          centered
        />

        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
          {skillsList.map((skill, index) => (
            <SkillChip key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
