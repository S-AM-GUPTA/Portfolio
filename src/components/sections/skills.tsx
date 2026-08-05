"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { useState } from "react";

export const skillsList = [
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

function DockItem({ skill, index }: { skill: typeof skillsList[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="relative group flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ 
          y: isHovered ? -12 : 0, 
          scale: isHovered ? 1.2 : 1 
        }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-[16px] ${skill.color} shadow-sm group-hover:shadow-xl group-hover:shadow-[var(--color-deep-teal)]/20 border border-white/60 flex items-center justify-center p-3 relative z-10`}
      >
        <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -25, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-0 whitespace-nowrap px-3 py-1.5 bg-[var(--color-charcoal-navy)] text-white text-[12px] font-[500] rounded-[8px] pointer-events-none z-50 shadow-xl"
            style={{ y: "-100%", marginTop: "-16px" }}
          >
            {skill.name}
            {/* Tooltip Arrow */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--color-charcoal-navy)] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="The tools and technologies I use to bring ideas to life."
          centered
        />

        <div className="mt-16 w-full flex justify-center pb-12">
          {/* Glass Toolbar Container */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 p-4 md:p-6 bg-[var(--color-paper-white)]/40 backdrop-blur-2xl border border-white/60 rounded-[32px] shadow-2xl shadow-[var(--color-deep-teal)]/5 w-max max-w-full">
            {skillsList.map((skill, index) => (
              <DockItem key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
