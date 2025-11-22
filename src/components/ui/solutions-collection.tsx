"use client";
import { useState } from 'react';
import { SolutionModal } from "./solution-modal";
import { type Solution } from '../../lib/solutions';
import { SolutionCard } from "./solution-card";

interface SolutionsGridProps {
  solutions: Solution[];
  limit?: number;
  minimal?: boolean;
  filter?: string;
}

export const SolutionsGrid = ({
  solutions = [],
  limit,
  minimal = false,
  filter = "all",
}: SolutionsGridProps) => {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!Array.isArray(solutions)) {
    console.error("SolutionsGrid: solutions is not an array", solutions);
    return null;
  }

  // Sort by date
  let displaySolutions = [...solutions].sort((a, b) => {
    const dateA = new Date(a.date || '').getTime();
    const dateB = new Date(b.date || '').getTime();
    return dateB - dateA;
  });

  // Filter
  if (filter !== "all") {
    displaySolutions = displaySolutions.filter(
      (solution) => solution.platform === filter
    );
  }

  // Limit
  if (limit) {
    displaySolutions = displaySolutions.slice(0, limit);
  }

  const handleSolutionClick = (solution: Solution) => {
    setSelectedSolution(solution);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displaySolutions.map((solution, index) => (
          <SolutionCard
            key={solution.id}
            solution={solution}
            index={index}
            onClick={() => handleSolutionClick(solution)}
          />
        ))}
      </div>

      {selectedSolution && (
        <SolutionModal
          solution={selectedSolution}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};
