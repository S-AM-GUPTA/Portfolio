"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          tag="Get In Touch"
          title="Let's Build Something Great" 
          subtitle="Open for full-time engineering roles, high-impact projects, and conversations around AI & software architecture."
          centered
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 bg-[#faf7f3] border-[3px] border-[#2b1a05] rounded-3xl p-8 md:p-12 shadow-[8px_8px_0_#2b1a05]">
          
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="font-hand text-2xl text-[#2b1a05] font-bold rotate-[-3deg] inline-block mb-1">
                ✦ Say hello!
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#2b1a05] mb-2 font-medium">Direct Channels</h3>
              <p className="text-sm text-[#2b1a05]/75 leading-relaxed">
                Whether you have an ambitious product idea, an open position, or just want to connect, feel free to reach out.
              </p>
            </div>

            <div className="space-y-3.5">
              <a href="mailto:samfgst3@gmail.com" className="flex items-center gap-3.5 p-3 rounded-2xl border-[2px] border-[#2b1a05] bg-[#efe9da] text-[#2b1a05] hover:bg-[#ffca78] transition-all duration-200 shadow-[2px_2px_0_#2b1a05] hover:-translate-y-0.5 group">
                <div className="w-10 h-10 rounded-xl bg-[#faf7f3] border border-[#2b1a05]/20 flex items-center justify-center text-[#2b1a05]">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-bold tracking-wide">samfgst3@gmail.com</span>
              </a>

              <a href="https://www.linkedin.com/in/s-aksham-gupta/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 p-3 rounded-2xl border-[2px] border-[#2b1a05] bg-[#efe9da] text-[#2b1a05] hover:bg-[#cbb8d9] transition-all duration-200 shadow-[2px_2px_0_#2b1a05] hover:-translate-y-0.5 group">
                <div className="w-10 h-10 rounded-xl bg-[#faf7f3] border border-[#2b1a05]/20 flex items-center justify-center text-[#2b1a05]">
                  <LinkedinIcon />
                </div>
                <span className="text-xs font-mono font-bold tracking-wide">LinkedIn /s-aksham-gupta</span>
              </a>

              <a href="https://github.com/S-AM-GUPTA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 p-3 rounded-2xl border-[2px] border-[#2b1a05] bg-[#efe9da] text-[#2b1a05] hover:bg-[#ffca78] transition-all duration-200 shadow-[2px_2px_0_#2b1a05] hover:-translate-y-0.5 group">
                <div className="w-10 h-10 rounded-xl bg-[#faf7f3] border border-[#2b1a05]/20 flex items-center justify-center text-[#2b1a05]">
                  <GithubIcon />
                </div>
                <span className="text-xs font-mono font-bold tracking-wide">GitHub /S-AM-GUPTA</span>
              </a>

              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 p-3 rounded-2xl border-[2px] border-[#2b1a05] bg-[#efe9da] text-[#2b1a05] hover:bg-[#e8d9b0] transition-all duration-200 shadow-[2px_2px_0_#2b1a05] hover:-translate-y-0.5 group">
                <div className="w-10 h-10 rounded-xl bg-[#faf7f3] border border-[#2b1a05]/20 flex items-center justify-center text-[#2b1a05]">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-bold tracking-wide">Download Official Resume</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form className="lg:col-span-3 space-y-5 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-mono tracking-widest text-[#2b1a05] uppercase font-bold">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#efe9da]/70 border-[2px] border-[#2b1a05] rounded-xl px-4 py-3 text-sm text-[#2b1a05] placeholder:text-[#2b1a05]/40 focus:outline-none focus:bg-[#faf7f3] shadow-[2px_2px_0_#2b1a05] transition-all"
                  placeholder="Saksham Gupta"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono tracking-widest text-[#2b1a05] uppercase font-bold">Your Email</label>
                <input 
                  type="email" 
                  className="w-full bg-[#efe9da]/70 border-[2px] border-[#2b1a05] rounded-xl px-4 py-3 text-sm text-[#2b1a05] placeholder:text-[#2b1a05]/40 focus:outline-none focus:bg-[#faf7f3] shadow-[2px_2px_0_#2b1a05] transition-all"
                  placeholder="hello@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-xs font-mono tracking-widest text-[#2b1a05] uppercase font-bold">Subject</label>
              <input 
                type="text" 
                className="w-full bg-[#efe9da]/70 border-[2px] border-[#2b1a05] rounded-xl px-4 py-3 text-sm text-[#2b1a05] placeholder:text-[#2b1a05]/40 focus:outline-none focus:bg-[#faf7f3] shadow-[2px_2px_0_#2b1a05] transition-all"
                placeholder="Project Inquiry / Job Opportunity"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono tracking-widest text-[#2b1a05] uppercase font-bold">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-[#efe9da]/70 border-[2px] border-[#2b1a05] rounded-xl px-4 py-3 text-sm text-[#2b1a05] placeholder:text-[#2b1a05]/40 focus:outline-none focus:bg-[#faf7f3] shadow-[2px_2px_0_#2b1a05] transition-all resize-none"
                placeholder="Tell me about your project or role..."
              />
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#2b1a05] text-[#ffca78] hover:bg-[#ffca78] hover:text-[#2b1a05] border-[2.5px] border-[#2b1a05] shadow-[4px_4px_0_#ffca78] hover:shadow-[6px_6px_0_#2b1a05] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Send Message ✦
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

