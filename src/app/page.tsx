import { MouseEffect } from "@/components/animations/mouse-effect";
import { Navigation } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Certificates } from "@/components/sections/certificates";
import { GithubSection } from "@/components/sections/github";
import { Journey } from "@/components/sections/journey";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative bg-transparent text-foreground min-h-screen selection:bg-white/30 selection:text-white">
      <MouseEffect />
      <Navigation />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <GithubSection />
      <Journey />
      <Contact />
      
      <Footer />
    </main>
  );
}
