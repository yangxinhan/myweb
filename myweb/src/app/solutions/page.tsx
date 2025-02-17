"use client";
import { useState } from 'react';
import { Navbar } from "../../components/ui/navbar";
import { SolutionsGrid } from "../../components/ui/solutions-collection";

export default function SolutionsPage() {
  const [filter, setFilter] = useState<string>('all');
  const categories = [
    'all',
    'LeetCode',
    'ASOJ',
    'AtCoder',
    'Kattis',
    'TOJ',
    'UVa',
    'Codeforces',
    'ZeroJudge'
  ];

  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)] mt-16">
        {/* 左側過濾器 */}
        <div className="md:w-64 p-6 bg-black/20 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white mb-4">分類</h2>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors text-left ${
                  filter === cat
                    ? 'bg-white/20 text-white'
                    : 'text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat === 'all' ? '全部' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 右側內容 */}
        <div className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-white mb-6">
            題解列表
          </h1>
          <div className="max-w-6xl">
            <SolutionsGrid filter={filter} />
          </div>
        </div>
      </div>
    </div>
  );
}
