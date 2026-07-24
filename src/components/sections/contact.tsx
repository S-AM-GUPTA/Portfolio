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
    <section id="contact" className="py-12 md:py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Let's Build Something" 
          subtitle="Open for opportunities, collaborations, and conversations about the future of tech."
          className="text-center items-center mb-16"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 bg-secondary-100/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Get in touch</h3>
              <p className="text-muted leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 text-muted hover:text-accent-blue transition-colors group">
                <div className="w-12 h-12 rounded-full bg-secondary-200 border border-white/5 flex items-center justify-center group-hover:border-accent-blue/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">hello@example.com</span>
              </a>
              <a href="https://www.linkedin.com/in/s-aksham-gupta/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted hover:text-accent-purple transition-colors group">
                <div className="w-12 h-12 rounded-full bg-secondary-200 border border-white/5 flex items-center justify-center group-hover:border-accent-purple/50 transition-colors">
                  <LinkedinIcon />
                </div>
                <span className="font-medium">LinkedIn Profile</span>
              </a>
              <a href="https://github.com/S-AM-GUPTA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted hover:text-accent-cyan transition-colors group">
                <div className="w-12 h-12 rounded-full bg-secondary-200 border border-white/5 flex items-center justify-center group-hover:border-accent-cyan/50 transition-colors">
                  <GithubIcon />
                </div>
                <span className="font-medium">GitHub Profile</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-muted hover:text-foreground transition-colors group">
                <div className="w-12 h-12 rounded-full bg-secondary-200 border border-white/5 flex items-center justify-center group-hover:border-white/50 transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="font-medium">Download Resume</span>
              </a>
            </div>
          </div>

          <form className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-secondary-200/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-secondary-200/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted">Subject</label>
              <input 
                type="text" 
                className="w-full bg-secondary-200/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/50 transition-all"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-secondary-200/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/50 transition-all resize-none"
                placeholder="Tell me about your idea..."
              />
            </div>

            <Button className="w-full">Send Message</Button>
          </form>

        </div>
      </div>
    </section>
  );
}
