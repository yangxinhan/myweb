"use client";
import { Navbar } from "../../components/ui/navbar";
import GithubProjects from "../../components/ui/github-projects";
import Image from "next/image";
import { motion } from "framer-motion";


export default function PortfolioPage() {
  return (
    <div className="w-full min-h-screen relative">


      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-4 pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-2">作品集</h1>
            <p className="text-neutral-400 mb-8">我的 GitHub 開源專案與實作</p>
            <GithubProjects />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
