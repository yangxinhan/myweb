"use client";
import { useState } from 'react';
import { SolutionModal } from "./solution-modal";
import { type Solution } from '../../lib/solutions';

interface SolutionCardProps {
  solution: Solution;
  minimal?: boolean;
}

export const SolutionCard = ({ solution, minimal = false }: SolutionCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors border border-white/[0.1] backdrop-blur-sm cursor-pointer h-[120px] flex flex-col justify-between hover:scale-[0.995] transition-transform"
      >
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-lg font-medium text-white line-clamp-2 flex-1">{solution.title}</h3>
          <span className={`shrink-0 px-2 py-1 rounded-full text-xs ${
            solution.difficulty === 'Easy' ? 'bg-green-500/20 text-green-300' :
            solution.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
            'bg-red-500/20 text-red-300'
          }`}>
            {solution.difficulty}
          </span>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded">
            {solution.platform}
          </span>
          {!minimal && (
            <time className="text-xs text-white/40">
              {new Date(solution.date).toLocaleDateString('zh-TW')}
            </time>
          )}
        </div>
      </div>

      <SolutionModal
        solution={solution}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

interface SolutionsGridProps {
  solutions: Solution[];
  limit?: number;
  minimal?: boolean;
  filter?: string; // 新增分類過濾屬性
}

export const SolutionsGrid = ({
  solutions = [],
  limit,
  minimal = false,
  filter = "all",
}: SolutionsGridProps) => {
  if (!Array.isArray(solutions)) {
    console.error("SolutionsGrid: solutions is not an array", solutions);
    return null;
  }

  // 先依照日期排序
  let displaySolutions = [...solutions].sort((a, b) => {
    const dateA = new Date(a.date || '').getTime();
    const dateB = new Date(b.date || '').getTime();
    return dateB - dateA;  // 從新到舊排序
  });

  // 再進行分類過濾
  if (filter !== "all") {
    displaySolutions = displaySolutions.filter(
      (solution) => solution.platform === filter
    );
  }

  // 最後進行限制
  if (limit) {
    displaySolutions = displaySolutions.slice(0, limit);
  }

  return (
    <div className="flex flex-wrap gap-4">
      {displaySolutions.map((solution) => (
        <div key={solution.id} className="w-[calc(50%-8px)]">
          <SolutionCard
            solution={solution}
            minimal={minimal}
          />
        </div>
      ))}
    </div>
  );
};
