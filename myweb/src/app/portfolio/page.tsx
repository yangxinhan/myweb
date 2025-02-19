"use client";
import { useState } from "react";
import { Navbar } from "../../components/ui/navbar";
import { GitHubProjects } from "../../components/ui/github-projects";
import { ProjectReadme } from "../../components/ui/project-readme";
import Image from "next/image";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<{
    owner: string;
    repo: string;
  } | null>(null);

  return (
    <div className="w-full min-h-screen bg-black relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/背景.png"
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
          <h1 className="text-3xl font-bold text-white mb-8">作品集</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 backdrop-blur-sm">
              <GitHubProjects onProjectSelect={setSelectedProject} />
            </div>
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-6 h-[calc(100vh-200px)] overflow-y-auto">
              {selectedProject ? (
                <ProjectReadme 
                  owner={selectedProject.owner} 
                  repo={selectedProject.repo} 
                />
              ) : (
                <div className="text-white/60 text-center">
                  請選擇一個專案以查看詳細信息
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
