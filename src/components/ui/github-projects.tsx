"use client";
import { useState, useEffect } from "react";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";

interface Repository {
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  pushed_at: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
}

export default function GithubProjects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);
  const [readme, setReadme] = useState<string>('');
  const [latestCommit, setLatestCommit] = useState<Commit | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/yangxinhan/repos")
      .then((res) => res.json())
      .then((data) => {
        // Sort by stars then date
        const sorted = Array.isArray(data) ? data.sort((a: Repository, b: Repository) => {
          return b.stargazers_count - a.stargazers_count || new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        }) : [];
        setRepos(sorted);
      })
      .catch(console.error);
  }, []);

  const handleProjectClick = async (repo: Repository) => {
    setSelectedRepo(repo);
    setIsModalOpen(true);
    setReadme('Loading README...');
    setLatestCommit(null);
    
    try {
      // Fetch README
      const readmeRes = await fetch(`https://raw.githubusercontent.com/yangxinhan/${repo.name}/main/README.md`);
      if (readmeRes.ok) {
        const text = await readmeRes.text();
        setReadme(text);
      } else {
        setReadme('# No README found\n\nThis repository does not have a README file.');
      }

      // Fetch Latest Commit
      const commitRes = await fetch(`https://api.github.com/repos/yangxinhan/${repo.name}/commits?per_page=1`);
      if (commitRes.ok) {
        const commits = await commitRes.json();
        if (commits && commits.length > 0) {
          setLatestCommit(commits[0]);
        }
      }
    } catch (error) {
      console.error("Error fetching project details:", error);
      setReadme('# Error loading details\n\nFailed to fetch project details.');
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <ProjectCard
            key={repo.name}
            repo={repo}
            onClick={() => handleProjectClick(repo)}
          />
        ))}
      </div>

      <ProjectModal
        repo={selectedRepo}
        readme={readme}
        latestCommit={latestCommit}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
