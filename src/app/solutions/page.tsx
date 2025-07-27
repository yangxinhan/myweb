"use client";
import { useState } from "react";
import { Navbar } from "../../components/ui/navbar";
import { SolutionsGrid } from "../../components/ui/solutions-collection";
import { solutions } from "../../lib/solutions";
import Image from "next/image";

export default function SolutionsPage() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="w-full min-h-screen bg-black relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/myweb/background.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 pt-24">
          <h1 className="text-3xl font-bold text-white mb-8">演算法題解</h1>
          
          {/* Filter */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === "all"
                  ? "bg-white/20 text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              } transition-colors`}
            >
              全部
            </button>
            {["LeetCode", "Codeforces", "ZEROJUDGE"].map((platform) => (
              <button
                key={platform}
                onClick={() => setFilter(platform)}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === platform
                    ? "bg-white/20 text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                } transition-colors`}
              >
                {platform}
              </button>
            ))}
          </div>

          <SolutionsGrid solutions={solutions} filter={filter} />
        </div>
      </div>
    </div>
  );
}
