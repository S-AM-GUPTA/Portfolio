"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { useState } from "react";

const skillsList = [
  { name: "React.js", image: "/skills/react.png", color: "bg-[var(--color-card-mint)]" },
  { name: "Next.js", image: "/skills/nextjs.png", color: "bg-white border border-[var(--color-mint-mist)]" },
  { name: "TypeScript", image: "/skills/typescript.png", color: "bg-[var(--color-sea-foam)]" },
  { name: "JavaScript", image: "/skills/javascript.png", color: "bg-[var(--color-blush-sand)]" },
  { name: "Node.js", image: "https://cdn.simpleicons.org/nodedotjs/339933", color: "bg-[var(--color-card-mint)]" },
  { name: "Express.js", image: "https://cdn.simpleicons.org/express/000000", color: "bg-white border border-[var(--color-mint-mist)]" },
  { name: "MongoDB", image: "https://cdn.simpleicons.org/mongodb/47A248", color: "bg-[var(--color-sea-foam)]" },
  { name: "PostgreSQL", image: "https://cdn.simpleicons.org/postgresql/4169E1", color: "bg-[var(--color-card-mint)]" },
  { name: "Tailwind CSS", image: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "bg-[var(--color-blush-sand)]" },
  { name: "Framer Motion", image: "https://cdn.simpleicons.org/framer/0055FF", color: "bg-[var(--color-sea-foam)]" },
  { name: "Python", image: "https://cdn.simpleicons.org/python/3776AB", color: "bg-white border border-[var(--color-mint-mist)]" },
  { name: "Git", image: "/skills/git.png", color: "bg-[var(--color-card-mint)]" },
  { name: "Vercel", image: "https://cdn.simpleicons.org/vercel/000000", color: "bg-[var(--color-blush-sand)]" },
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
                <img src={skill.image} alt={skill.name} className="w-12 h-12 object-contain" />
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
