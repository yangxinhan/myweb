"use client";
import { useState } from "react";
import { Navbar } from "../../components/ui/navbar";
import { SolutionsGrid } from "../../components/ui/solutions-collection";
import { solutions } from "../../lib/solutions";

export default function SolutionsPage() {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "LeetCode", "Codeforces", "AtCoder"]; // 添加分類選項

  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)] mt-16">
        {/* 側邊欄 */}
        <aside className="lg:w-1/4 bg-black/20 p-6">
          <h2 className="text-lg font-bold text-white mb-4">分類</h2>
          <div className="flex lg:flex-col gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm w-full text-left ${
                  filter === category
                    ? "bg-blue-500 text-white"
                    : "bg-white/10 text-white/60 hover:bg-white/20"
                }`}
              >
                {category === "all" ? "全部" : category}
              </button>
            ))}
          </div>
        </aside>

        {/* 主內容 */}
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-white mb-6">題解列表</h1>
          <div className="max-w-6xl">
            <SolutionsGrid solutions={solutions} filter={filter} /> {/* 傳遞分類 */}
          </div>
        </main>
      </div>
    </div>
  );
}
