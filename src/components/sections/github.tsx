"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GitCommit, Star, GitPullRequest, GitMerge } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect } from "react";

export function GithubSection() {
  const [mounted, setMounted] = useState(false);
  const [githubData, setGithubData] = useState({
    repos: "-",
    stars: "-",
    prs: "-"
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
    { icon: <GitCommit className="w-4 h-4 text-[#2b1a05]" />, label: "Contributions", value: "54+" },
    { icon: <Star className="w-4 h-4 text-[#2b1a05]" />, label: "Stars Earned", value: githubData.stars },
    { icon: <GitPullRequest className="w-4 h-4 text-[#2b1a05]" />, label: "Pull Requests", value: githubData.prs },
    { icon: <GitMerge className="w-4 h-4 text-[#2b1a05]" />, label: "Repositories", value: githubData.repos },
  ];

  return (
    <section id="github" className="py-16 md:py-20 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          tag="Open Source & Craft"
          title="Engineering Consistency" 
          subtitle="A live summary of my repositories, commits, and open-source contributions."
        />

        <div className="bg-[#faf7f3] border-[3px] border-[#2b1a05] rounded-3xl p-8 md:p-10 shadow-[8px_8px_0_#2b1a05]">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6 pb-6 border-b border-[#2b1a05]/15">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border-[2px] border-[#2b1a05] bg-[#ffca78] flex items-center justify-center overflow-hidden shadow-[2px_2px_0_#2b1a05]">
                 <img src="https://github.com/S-AM-GUPTA.png" alt="GitHub Avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2b1a05]">@S-AM-GUPTA</h3>
                <p className="text-xs font-mono text-[#2b1a05]/70 uppercase tracking-wider font-semibold">Full Stack & AI Engineer</p>
              </div>
            </div>

            <a 
              href="https://github.com/S-AM-GUPTA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2.5 rounded-full bg-[#2b1a05] text-[#ffca78] hover:bg-[#ffca78] hover:text-[#2b1a05] border-[2px] border-[#2b1a05] text-xs font-mono font-bold uppercase tracking-wider shadow-[2px_2px_0_#ffca78] hover:shadow-[4px_4px_0_#2b1a05] hover:-translate-y-0.5 transition-all duration-200"
            >
              Follow on GitHub ✦
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#efe9da] rounded-2xl p-4 border-[2px] border-[#2b1a05] shadow-[3px_3px_0_#2b1a05] flex flex-col gap-1.5"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#2b1a05]/70 font-semibold uppercase">
                  {stat.icon}
                  <span>{stat.label}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-medium text-[#2b1a05]">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Contribution Heatmap */}
          <div className="overflow-x-auto pb-4 custom-scrollbar flex justify-center w-full bg-[#efe9da]/50 border border-[#2b1a05]/15 rounded-2xl p-4">
            <div className="min-w-fit flex items-center justify-center">
              {mounted ? (
                <GitHubCalendar 
                  username="S-AM-GUPTA" 
                  colorScheme="light" 
                  blockSize={12}
                  blockMargin={4}
                  fontSize={12}
                />
              ) : (
                <div className="text-xs font-mono text-[#2b1a05]/50">Loading activity...</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

