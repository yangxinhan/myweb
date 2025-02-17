"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export const TextGenerateEffect = ({ words }: { words: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    words.slice(0, latest)
  );

  useEffect(() => {
    const animation = animate(count, words.length, {
      type: "tween",
      duration: 1,
      ease: "easeIn",
    });
    return animation.stop;
  }, [words.length, count]);

  return (
    <div className="text-center">
      <motion.span className="text-4xl md:text-6xl font-bold text-white">
        {displayText}
      </motion.span>
    </div>
  );
};
