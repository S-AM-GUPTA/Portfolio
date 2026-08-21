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
    <section id="journey" className="py-24 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          tag="Timeline & Evolution"
          title="The Learning Journey" 
          subtitle="A continuous path of engineering, experimentation, and product building."
          centered
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[3px] bg-[#2b1a05]/20 -translate-x-1/2" />
          
          <div className="flex flex-col gap-10">
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
                <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#ffca78] border-[2.5px] border-[#2b1a05] shadow-[2px_2px_0_#2b1a05] z-10 group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2b1a05]" />
                </div>
                
                {/* Space for the opposite side */}
                <div className="hidden md:block w-1/2" />
                
                {/* Card Container */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-10 text-right" : "md:pl-10 text-left"}`}>
                  <div className="bg-[#faf7f3] border-[2.5px] border-[#2b1a05] shadow-[5px_5px_0_#2b1a05] rounded-2xl p-6 hover:bg-[#ffca78]/30 transition-all duration-300 inline-block w-full">
                    <div className="text-3xl font-serif text-[#2b1a05] mb-1 font-medium leading-none">
                      {step.year}
                    </div>
                    <h3 className="text-base font-serif font-bold text-[#2b1a05] mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2b1a05]/80 leading-relaxed">
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

