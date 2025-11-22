"use client";
import { useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";

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

interface ProjectModalProps {
  repo: Repository | null;
  readme: string;
  latestCommit: Commit | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ repo, readme, latestCommit, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  if (!repo || !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } transition-opacity`}
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-5xl max-h-[90vh] flex flex-col bg-neutral-900/90 rounded-2xl border border-white/10 backdrop-blur-lg animate-modalSlideUp shadow-2xl">
          
          {/* Header */}
          <div className="flex justify-between items-start p-6 border-b border-white/10 bg-white/5 rounded-t-2xl">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{repo.name}</h2>
              <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch />
                  {repo.forks_count}
                </span>
                {repo.language && (
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {repo.language}
                  </span>
                )}
              </div>
              
              {latestCommit && (
                <div className="flex items-start gap-2 text-sm bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white/40 text-xs font-mono">{latestCommit.sha.substring(0, 7)}</span>
                      <span className="text-white/40 text-xs">•</span>
                      <span className="text-white/40 text-xs">{new Date(latestCommit.commit.author.date).toLocaleString()}</span>
                    </div>
                    <p className="text-white/80 line-clamp-1 font-mono text-xs">{latestCommit.commit.message}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors text-sm font-medium"
              >
                <FaGithub />
                View on GitHub
              </a>
              <button
                onClick={onClose}
                className="p-2 text-white/40 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            {repo.description && (
              <p className="text-white/80 mb-8 text-lg leading-relaxed border-l-4 border-blue-500 pl-4 bg-blue-500/5 py-2 rounded-r-lg">
                {repo.description}
              </p>
            )}
            
            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, [rehypeHighlight, { detect: true }]]}
                className="markdown-content"
              >
                {readme}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
