"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { type Solution } from "../../lib/solutions";

interface SolutionCardProps {
  solution: Solution;
  index: number;
}

export function SolutionCard({ solution, index, onClick }: SolutionCardProps & { onClick?: () => void }) {


  const getDifficultyColor = (diff: string) => {
    switch (diff.toLowerCase()) {
      case 'easy': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'hard': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-white/60 bg-white/10 border-white/20';
    }
  };

  const CardContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80">
          {solution.platform}
        </span>
        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(solution.difficulty)}`}>
          {solution.difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-1">
        {solution.title}
      </h3>

      <div className="flex flex-wrap gap-2 mt-auto">
        {solution.tags.slice(0, 3).map((tag) => (
          <span 
            key={tag} 
            className="text-xs text-white/50"
          >
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-white/40">
        <span>{solution.date}</span>
        <span className="group-hover:translate-x-1 transition-transform">Read Solution →</span>
      </div>
    </motion.div>
  );

  if (onClick) {
    return (
      <div onClick={onClick}>
        <CardContent />
      </div>
    );
  }

  return (
    <Link href={`/solutions/${solution.slug}`}>
      <CardContent />
    </Link>
  );
}
