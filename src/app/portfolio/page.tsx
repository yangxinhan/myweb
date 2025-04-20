"use client";
import { Navbar } from "../../components/ui/navbar";
import GithubProjects from "../../components/ui/github-projects"; // 使用默認導入
import Image from "next/image";

export default function PortfolioPage() {
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
          <h1 className="text-3xl font-bold text-white mb-8">作品集</h1>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <div className="lg:col-span-1 backdrop-blur-sm">
              <GithubProjects />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
