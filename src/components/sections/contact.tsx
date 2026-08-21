"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Mail, FileText, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    submitting: boolean;
    submitted: boolean;
    error: string | null;
    successMessage: string | null;
  }>({
    submitting: false,
    submitted: false,
    error: null,
    successMessage: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null, successMessage: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null,
          successMessage: data.message || "Your message has been sent successfully!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          submitting: false,
          submitted: false,
          error: data.error || "Failed to send message. Please try again or email directly.",
          successMessage: null,
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus({
        submitting: false,
        submitted: false,
        error: "Network connection error. Please try emailing directly at samfgst3@gmail.com",
        successMessage: null,
      });
    }
  };

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

          {/* Interactive Form */}
          <div className="lg:col-span-3">
            {status.submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8 bg-[#efe9da] border-[2.5px] border-[#2b1a05] rounded-2xl shadow-[4px_4px_0_#2b1a05] space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#ffca78] border-[2px] border-[#2b1a05] flex items-center justify-center text-[#2b1a05] shadow-[2px_2px_0_#2b1a05]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-[#2b1a05]">Message Sent!</h4>
                <p className="text-sm text-[#2b1a05]/80 leading-relaxed max-w-md font-normal">
                  {status.successMessage}
                </p>
                <button
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null, successMessage: null })}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#2b1a05] text-[#ffca78] border-[2px] border-[#2b1a05] shadow-[2px_2px_0_#ffca78] hover:shadow-[4px_4px_0_#2b1a05] hover:-translate-y-0.5 transition-all"
                >
                  Send Another Message ✦
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 flex flex-col justify-between h-full">
                {status.error && (
                  <div className="p-3.5 rounded-xl border-[2px] border-red-700 bg-red-100 text-red-900 text-xs font-mono font-bold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{status.error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono tracking-widest text-[#2b1a05] uppercase font-bold">Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#efe9da]/70 border-[2px] border-[#2b1a05] rounded-xl px-4 py-3 text-sm text-[#2b1a05] placeholder:text-[#2b1a05]/40 focus:outline-none focus:bg-[#faf7f3] shadow-[2px_2px_0_#2b1a05] transition-all"
                      placeholder="Saksham Gupta"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono tracking-widest text-[#2b1a05] uppercase font-bold">Your Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#efe9da]/70 border-[2px] border-[#2b1a05] rounded-xl px-4 py-3 text-sm text-[#2b1a05] placeholder:text-[#2b1a05]/40 focus:outline-none focus:bg-[#faf7f3] shadow-[2px_2px_0_#2b1a05] transition-all"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-mono tracking-widest text-[#2b1a05] uppercase font-bold">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#efe9da]/70 border-[2px] border-[#2b1a05] rounded-xl px-4 py-3 text-sm text-[#2b1a05] placeholder:text-[#2b1a05]/40 focus:outline-none focus:bg-[#faf7f3] shadow-[2px_2px_0_#2b1a05] transition-all"
                    placeholder="Project Inquiry / Job Opportunity"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono tracking-widest text-[#2b1a05] uppercase font-bold">Message *</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#efe9da]/70 border-[2px] border-[#2b1a05] rounded-xl px-4 py-3 text-sm text-[#2b1a05] placeholder:text-[#2b1a05]/40 focus:outline-none focus:bg-[#faf7f3] shadow-[2px_2px_0_#2b1a05] transition-all resize-none"
                    placeholder="Tell me about your project or role..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#2b1a05] text-[#ffca78] hover:bg-[#ffca78] hover:text-[#2b1a05] border-[2.5px] border-[#2b1a05] shadow-[4px_4px_0_#ffca78] hover:shadow-[6px_6px_0_#2b1a05] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status.submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message... ✦</span>
                    </>
                  ) : (
                    <span>Send Message ✦</span>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}


