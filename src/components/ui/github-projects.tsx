"use client";
import { useState, useEffect } from "react";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

export default function GithubProjects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);
  const [readme, setReadme] = useState<string>('');

  useEffect(() => {
    fetch("https://api.github.com/users/yangxinhan/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        if (data.length > 0) setSelectedRepo(data[0]);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (selectedRepo) {
      fetch(`https://raw.githubusercontent.com/yangxinhan/${selectedRepo.name}/main/README.md`)
        .then(res => res.text())
        .then(text => setReadme(text))
        .catch(() => setReadme('# No README found'));
    }
  }, [selectedRepo]);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        {/* 專案列表 - 改為 2/6 寬度 */}
        <div className="lg:col-span-2 space-y-4 max-h-[80vh] overflow-y-auto pr-4">
          {repos.map((repo) => (
            <div
              key={repo.name}
              onClick={() => setSelectedRepo(repo)}
              className={`p-4 rounded-lg cursor-pointer transition-colors ${
                selectedRepo?.name === repo.name
                  ? "bg-white/20"
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-white">{repo.name}</h3>
                <div className="flex items-center gap-3 text-white/60">
                  <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeBranch />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
              {repo.description && (
                <p className="text-sm text-white/60 mt-2">{repo.description}</p>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {repo.language && (
                  <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/80">
                    {repo.language}
                  </span>
                )}
                {repo.topics?.map((topic) => (
                  <span key={topic} className="text-xs px-2 py-1 bg-blue-500/10 rounded-full text-blue-300">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* README 內容 - 改為 4/6 寬度 */}
        <div className="lg:col-span-4 prose prose-invert max-w-none max-h-[80vh] overflow-y-auto pr-4">
          {selectedRepo && (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white m-0">{selectedRepo.name}</h2>
                <a
                  href={selectedRepo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                >
                  <FaGithub />
                  View on GitHub
                </a>
              </div>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, [rehypeHighlight, { detect: true }]]}
                className="markdown-content"
              >
                {readme}
              </ReactMarkdown>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
