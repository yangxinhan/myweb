import { motion } from "framer-motion";

interface SolutionCardProps {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  link: string;
  description?: string;
  date?: string;
}

export const SolutionCard = ({
  title,
  difficulty,
  category,
  link,
  description,
  date
}: SolutionCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors border border-white/[0.1] backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <span className={`shrink-0 px-2 py-1 rounded-full text-xs ${
          difficulty === 'Easy' ? 'bg-green-500/20 text-green-300' :
          difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
          'bg-red-500/20 text-red-300'
        }`}>
          {difficulty}
        </span>
      </div>
      {description && (
        <p className="text-neutral-300 text-sm mb-3">
          {description}
        </p>
      )}
      <div className="flex items-center justify-between text-xs">
        <span className="text-neutral-400 bg-white/5 px-2 py-1 rounded">
          {category}
        </span>
        {date && <span className="text-neutral-500">{date}</span>}
      </div>
    </motion.a>
  );
};
