"use client";
import { useEffect, useState } from "react";

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
}

interface GitHubProjectsProps {
  onProjectSelect?: (project: { owner: string; repo: string }) => void;
}

export const GitHubProjects = ({ onProjectSelect }: GitHubProjectsProps) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/yangxinhan/repos?per_page=100');
        const data = await response.json();
        // 依照最後更新時間排序
        const sortedRepos = data.sort((a: any, b: any) => 
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        setRepos(sortedRepos);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map((repo) => (
        <div
          key={repo.name}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-colors cursor-pointer"
          onClick={() => onProjectSelect?.({
            owner: 'yangxinhan',
            repo: repo.name
          })}
        >
          <h4 className="text-white font-medium truncate">{repo.name}</h4>
          <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
            {repo.description || "No description available"}
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {repo.language && (
              <span className="text-xs text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                {repo.language}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
