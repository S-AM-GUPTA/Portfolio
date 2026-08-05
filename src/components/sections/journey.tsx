"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const journeySteps = [
  { year: "2022", title: "Started Programming", description: "Began the journey into computer science, learning fundamentals." },
  { year: "2023", title: "Full Stack Development", description: "Mastered the MERN stack and built initial projects." },
  { year: "2024", title: "AI Development", description: "Integrated LLMs and intelligent features into web applications." },
  { year: "2025", title: "Product Building", description: "Focused on user-centric design, SaaS architectures, and startup ecosystems." },
  { year: "2026", title: "Scaling Solutions", description: "Engineering high-performance systems for global impact." },
];

export function Journey() {
  return (
    <section id="journey" className="py-20 relative z-10 bg-[var(--color-paper-white)]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="The Journey" 
          subtitle="My path of continuous growth and technical evolution."
          centered
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[2px] bg-[var(--color-sea-foam)] -translate-x-1/2" />
          
          <div className="flex flex-col gap-12">
            {journeySteps.map((step, i) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center group ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--color-deep-teal)] border-4 border-[var(--color-paper-white)] z-10 group-hover:scale-125 transition-transform duration-300" />
                
                {/* Space for the opposite side */}
                <div className="hidden md:block w-1/2" />
                
                {/* Card Container */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 text-right" : "md:pl-12 text-left"}`}>
                  <div className="bg-[var(--color-card-mint)] rounded-[12px] p-6 hover:bg-[var(--color-sea-foam)] transition-colors inline-block w-full">
                    <div className="text-[32px] font-[400] font-serif text-[var(--color-deep-teal)] mb-2 leading-none">
                      {step.year}
                    </div>
                    <h3 className="text-[18px] font-[500] font-sans text-[var(--color-charcoal-navy)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[var(--color-charcoal-navy)] opacity-80 leading-[1.6]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
