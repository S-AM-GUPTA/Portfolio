"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrainCircuit, Rocket, Code2, Users } from "lucide-react";

const textVariants: any = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  }
};

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)", scale: 0.95 },
  visible: {
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

export function About() {
  const stats = [
    {
      icon: <Code2 className="w-6 h-6 text-[#2b1a05]" />,
      value: "3+",
      label: "Years Engineering",
      description: "Hands-on experience developing web apps & AI systems.",
      bgColor: "bg-[#ffca78]",
      rotate: "rotate-[-1deg]",
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#2b1a05]" />,
      value: "3",
      label: "Featured Products",
      description: "From concept to production-grade deployments.",
      bgColor: "bg-[#cbb8d9]",
      rotate: "rotate-[1deg]",
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-[#2b1a05]" />,
      value: "AI",
      label: "Driven Architectures",
      description: "LLMs, vector search, and intelligent workflows.",
      bgColor: "bg-[#efe9da]",
      rotate: "rotate-[-1deg]",
    },
    {
      icon: <Users className="w-6 h-6 text-[#2b1a05]" />,
      value: "8.01",
      label: "CGPA • ABESIT",
      description: "Computer Science & Engineering (Data Science).",
      bgColor: "bg-[#e8d9b0]",
      rotate: "rotate-[1.5deg]",
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          tag="Background & Philosophy"
          title="Who I Am & What Drives Me"
          subtitle="Merging engineering rigor with intuitive user experiences to ship meaningful digital products."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Bio Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-6 text-base sm:text-lg text-[#2b1a05]/85 leading-relaxed font-normal p-8 rounded-2xl border-[3px] border-[#2b1a05] bg-[#faf7f3] shadow-[8px_8px_0_#2b1a05]"
          >
            <motion.p variants={textVariants}>
              I am a final-year <span className="font-semibold text-[#2b1a05] underline decoration-[#ffca78] decoration-2 underline-offset-4">B.Tech CSE (Data Science)</span> student at ABESIT, passionate about building products that live at the intersection of full-stack engineering, artificial intelligence, and clean UX design.
            </motion.p>
            <motion.p variants={textVariants}>
              I treat every project not just as a set of code routines, but as a holistic digital product. From architecture and databases to frontend micro-interactions, I focus on building software that users genuinely love to interact with.
            </motion.p>
            <motion.p variants={textVariants} className="font-hand text-2xl text-[#2b1a05] font-bold">
              ✦ "Good software isn't just functional — it feels effortless."
            </motion.p>
          </motion.div>

          {/* Bento Stat Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                className={`${stat.rotate} transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]`}
              >
                <div className={`h-full rounded-2xl p-6 ${stat.bgColor} border-[2.5px] border-[#2b1a05] shadow-[5px_5px_0_#2b1a05] flex flex-col justify-between`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg border border-[#2b1a05]/30 bg-white/50">
                      {stat.icon}
                    </div>
                    <span className="font-mono text-xs text-[#2b1a05]/60 uppercase tracking-widest font-semibold">✦ INFO</span>
                  </div>
                  <div>
                    <h3 className="text-4xl font-serif text-[#2b1a05] mb-1 leading-none font-medium">{stat.value}</h3>
                    <div className="text-xs font-mono tracking-wider uppercase text-[#2b1a05] font-bold mb-2 mt-1">
                      {stat.label}
                    </div>
                    <p className="text-xs text-[#2b1a05]/80 leading-relaxed">{stat.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

