"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Solution } from "./solutions-collection";
import { useEffect } from "react";
import hljs from 'highlight.js/lib/core';
import cpp from 'highlight.js/lib/languages/cpp';
import python from 'highlight.js/lib/languages/python';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('python', python);
hljs.registerLanguage('javascript', javascript);

interface SolutionModalProps {
  solution: Solution | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SolutionModal = ({ solution, isOpen, onClose }: SolutionModalProps) => {
  useEffect(() => {
    if (isOpen) {
      hljs.highlightAll();
    }
  }, [isOpen, solution]);

  const getPlatformText = (platform: string) => {
    const platformTexts = {
      'LeetCode': '在 LeetCode 上查看',
      'ASOJ': '在 ASOJ 上查看',
      'AtCoder': '在 AtCoder 上查看',
      'Kattis': '在 Kattis 上查看',
      'TOJ': '在 TOJ 上查看',
      'UVa': '在 UVa 上查看',
      'Codeforces': '在 Codeforces 上查看',
      'ZeroJudge': '在 ZeroJudge 上查看',
    };
    return `${platformTexts[platform as keyof typeof platformTexts] || '查看原題'} →`;
  };

  if (!solution) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* 模態框本體 */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-[90%] max-w-4xl max-h-[85vh] overflow-auto bg-neutral-900/90 rounded-xl border border-white/10 backdrop-blur-lg"
            >
              <div className="relative p-6">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-neutral-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
                
                {/* 內容部分 */}
                <div className="mt-2">
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-white">
                        {solution.title}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        solution.difficulty === 'Easy' ? 'bg-green-500/20 text-green-300' :
                        solution.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {solution.difficulty}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {solution.tags?.map(tag => (
                        <span key={tag} className="text-xs text-blue-300 bg-blue-500/10 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-3">題目描述</h3>
                      <p className="text-neutral-300">{solution.problem}</p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-white mb-3">解題思路</h3>
                      <p className="text-neutral-300">{solution.solution}</p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-white mb-3">程式碼</h3>
                      <pre className="!bg-[#282c34] rounded-lg !p-4 overflow-x-auto">
                        <code className={`language-${solution.language || 'cpp'}`}>
                          {solution.code}
                        </code>
                      </pre>
                    </section>

                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                      <span className="text-sm text-neutral-400">{solution.date}</span>
                      <a
                        href={solution.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:text-blue-300"
                      >
                        {getPlatformText(solution.platform)}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
