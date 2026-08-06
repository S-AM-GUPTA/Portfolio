"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GitCommit, Star, GitPullRequest, GitMerge } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect } from "react";

export function GithubSection() {
  const [mounted, setMounted] = useState(false);
  const [githubData, setGithubData] = useState({
    repos: "7",
    stars: "1",
    prs: "0"
  });
  
  useEffect(() => {
    setMounted(true);
    
    async function fetchGitHubData() {
      try {
        const username = "S-AM-GUPTA";
        
        // Fetch user data for repos
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) return;
        const userData = await userRes.json();
        
        // Fetch PRs
        const prRes = await fetch(`https://api.github.com/search/issues?q=author:${username}+type:pr`);
        const prData = prRes.ok ? await prRes.json() : { total_count: 0 };
        
        // Fetch repos for stars (up to 100)
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const reposData = reposRes.ok ? await reposRes.json() : [];
        
        let totalStars = 0;
        if (Array.isArray(reposData)) {
          totalStars = reposData.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0);
        }

        setGithubData({
          repos: userData.public_repos?.toString() || "7",
          stars: totalStars.toString() || "1",
          prs: prData.total_count?.toString() || "0"
        });
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
      }
    }
    
    fetchGitHubData();
  }, []);

  const stats = [
    { icon: <GitCommit className="w-5 h-5 text-green-400" />, label: "Yearly Contributions", value: "54" },
    { icon: <Star className="w-5 h-5 text-yellow-400" />, label: "Stars Earned", value: githubData.stars },
    { icon: <GitPullRequest className="w-5 h-5 text-purple-400" />, label: "Pull Requests", value: githubData.prs },
    { icon: <GitMerge className="w-5 h-5 text-blue-400" />, label: "Repositories", value: githubData.repos },
  ];

  return (
    <section id="github" className="py-12 md:py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Open Source Activity" 
          subtitle="A visualization of my coding consistency and contributions."
        />

        <div className="bg-secondary-100/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-secondary-200 border border-white/10 flex items-center justify-center overflow-hidden">
                 <img src="https://github.com/S-AM-GUPTA.png" alt="GitHub Avatar" className="w-full h-full object-cover opacity-80" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">@S-AM-GUPTA</h3>
                <p className="text-muted">Software Developer</p>
              </div>
            </div>

            <a href="https://github.com/S-AM-GUPTA" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
              Follow on GitHub
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-secondary-200/50 rounded-2xl p-4 border border-white/5 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  {stat.icon}
                  <span className="text-muted text-sm font-medium">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Real GitHub Contribution Heatmap */}
          <div className="overflow-x-auto pb-4 custom-scrollbar flex justify-center w-full">
            <div className="min-w-fit h-[150px] flex items-center justify-center">
              {mounted ? (
                <GitHubCalendar 
                  username="S-AM-GUPTA" 
                  colorScheme="dark" 
                  blockSize={12}
                  blockMargin={4}
                  fontSize={12}
                />
              ) : (
                <div className="text-muted/50 text-sm">Loading contributions...</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
