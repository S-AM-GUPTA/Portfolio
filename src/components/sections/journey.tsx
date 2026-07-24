"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/card";

const journeySteps = [
  { year: "2022", title: "Started Programming", description: "Began the journey into computer science, learning fundamentals." },
  { year: "2023", title: "Full Stack Development", description: "Mastered the MERN stack and built initial projects." },
  { year: "2024", title: "AI Development", description: "Integrated LLMs and intelligent features into web applications." },
  { year: "2025", title: "Product Building", description: "Focused on user-centric design, SaaS architectures, and startup ecosystems." },
  { year: "2026", title: "Scaling Solutions", description: "Engineering high-performance systems for global impact." },
];

export function Journey() {
  return (
    <section id="journey" className="py-12 md:py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="The Journey" 
          subtitle="My path of continuous growth and technical evolution."
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />
          
          <div className="flex flex-col gap-12">
            {journeySteps.map((step, i) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center group ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10 group-hover:scale-150 transition-transform duration-300" />
                
                {/* Space for the opposite side */}
                <div className="hidden md:block w-1/2" />
                
                {/* Card Container */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 text-right" : "md:pl-12 text-left"}`}>
                  <TiltCard className="border-white/5 bg-secondary-100/40 backdrop-blur-md hover:bg-secondary-100/60 transition-colors">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4">
                      {step.year}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted">
                      {step.description}
                    </p>
                  </TiltCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
