"use client";
import { useState } from "react";
import { Navbar } from "../../components/ui/navbar";
import { SolutionsGrid } from "../../components/ui/solutions-collection";
import { solutions } from "../../lib/solutions";
import Image from "next/image";
import { motion } from "framer-motion";
import { TechBackground } from "../../components/ui/tech-background";

export default function SolutionsPage() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="w-full min-h-screen bg-black relative">
      <TechBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 pt-24">
          <h1 className="text-3xl font-bold text-white mb-8">演算法題解</h1>
          
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {["all", "LeetCode", "Codeforces", "ZeroJudge"].map((platform) => {
              const isActive = filter === platform;
              return (
                <button
                  key={platform}
                  onClick={() => setFilter(platform)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="filter-active"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">
                    {platform === "all" ? "全部" : platform}
                  </span>
                </button>
              );
            })}
          </div>

          <SolutionsGrid solutions={solutions} filter={filter} />
        </div>
      </div>
    </div>
  );
}
