"use client";
import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

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

interface ProjectCardProps {
  repo: Repository;
  isSelected?: boolean;
  onClick?: () => void;
}

export function ProjectCard({ repo, isSelected, onClick }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer
        ${isSelected 
          ? "bg-white/10 border-white/20 shadow-xl shadow-white/5" 
          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
        }
      `}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
          {repo.name}
        </h3>
        <div className="flex gap-3 text-white/60">
          <span className="flex items-center gap-1.5 text-sm">
            <FaStar className="text-yellow-500" />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1.5 text-sm">
            <FaCodeBranch />
            {repo.forks_count}
          </span>
        </div>
      </div>

      <p className="text-white/70 text-sm mb-6 line-clamp-2 min-h-[2.5rem]">
        {repo.description || "No description available"}
      </p>

      <div className="flex flex-wrap items-center gap-2 mt-auto mb-4">
        {repo.language && (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
            {repo.language}
          </span>
        )}
        {repo.topics?.slice(0, 3).map((topic) => (
          <span 
            key={topic} 
            className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/60 border border-white/10"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs text-white/40">
        <span>Last updated: {new Date(repo.pushed_at).toLocaleDateString()}</span>
      </div>

      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <FaExternalLinkAlt className="text-white/40" />
      </div>
    </motion.div>
  );
}
