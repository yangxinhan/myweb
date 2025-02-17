"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface BentoGridItemProps {
  title: string;
  description: string;
  header?: string | React.ReactNode;
  className?: string;
}

export const BentoGridItem = ({
  title,
  description,
  header,
  className,
}: BentoGridItemProps) => {
  return (
    <motion.div
      whileHover={{ scale: 0.995 }}
      className={cn(
        "rounded-xl group/bento hover:shadow-2xl transition duration-200 p-4 bg-neutral-900/80 border border-neutral-600/20 backdrop-blur-sm min-h-[200px] flex flex-col",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200 h-full">
        {typeof header === "string" ? (
          <div className="font-mono text-sm text-neutral-400">{header}</div>
        ) : (
          header
        )}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 mt-auto">
        <div className="font-bold text-white mb-2 mt-2">{title}</div>
        <div className="text-sm text-neutral-300 whitespace-pre-line font-mono">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
