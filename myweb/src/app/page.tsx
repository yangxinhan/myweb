"use client";
import { Navbar } from "../components/ui/navbar";
import { BentoGrid } from "../components/ui/bento-grid";
import { BentoGridItem } from "../components/ui/bento-grid-item";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { GitHubProjects } from "../components/ui/github-projects";
import { SolutionsGrid } from "../components/ui/solutions-collection";

export default function Home() {
  const basePath = process.env.NODE_ENV === 'production' ? '/myweb' : '';

  const solutions = [
    {
      id: 1,
      title: "LeetCode #1 Two Sum",
      difficulty: "Easy",
      category: "Array",
      link: "https://leetcode.com/problems/two-sum/",
    },
    {
      id: 2,
      title: "LeetCode #217 Contains Duplicate",
      difficulty: "Easy",
      category: "Hash Table",
      link: "https://leetcode.com/problems/contains-duplicate/",
    },
    {
      id: 3,
      title: "LeetCode #53 Maximum Subarray",
      difficulty: "Medium",
      category: "DP",
      link: "https://leetcode.com/problems/maximum-subarray/",
    },
    {
      id: 4,
      title: "LeetCode #121 Best Time to Buy",
      difficulty: "Easy",
      category: "Array",
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    },
  ];

  const items = [
    {
      title: "個人簡介",
      description: "楊昕翰\n暱稱：羊羊\n",
      header: (
        <div className="flex items-center justify-center w-full h-full bg-neutral-900/50 rounded-xl p-4">
          <div className="relative w-32 h-32">
            <Image
              src="/頭貼.JPG"
              alt="Profile"
              fill
              className="rounded-full object-cover border-2 border-white/20"
              priority
            />
          </div>
        </div>
      ),
    },
    {
      title: "聯絡資訊",
      description: "📍 台灣，台南\n📧 yangxinhan061@gmail.com\n🎓 大灣高中高三牲",
      header: "Contact",
      className: "md:col-span-2",
    },
    {
      title: "關於我",
      description: "熱愛程式開發，專注於前端技術與使用者體驗設計。持續學習新技術，追求卓越的開發品質。",
      header: "About",
      className: "md:col-span-2",
    },
    {
      title: "社群連結",
      description: (
        <div className="flex items-center gap-4 text-2xl">
          <a href="https://github.com/yangxinhan" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <FaGithub />
          </a>
          <a href="https://instagram.com/yxh_0404" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <FaInstagram/>
          </a>
          <a href="https://linkedin.com/in/昕翰-楊-93678b351" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <FaLinkedin />
          </a>
        </div>
      ),
      header: "Social",
      className: "md:col-span-1",
    },
    {
      title: "Languages and Tools",
      description: (
        <div className="flex flex-wrap gap-2">
          {["HTML","CSS", "JavaScript", "TypeScript", "C", "C#", "C++", "Python", "Swift", "Markdown", "Arduino", "bots", "discordjs", "nodejs", "npm" , "opencv", "pytorch", "unity", "unreal", "anaconda", "azure", "blender", "docker", "figma", "firebase", "git", "github", "gitlab", "mysql", "notion","photoshop","Premiere","pycharm", "visualstudio", "vscode"  ,"apple" ,"windows" ,"linux", "kali", "ros", "raspberrypi"].map((skill) => (
            <span key={skill} className="bg-white/10 px-3 py-1 rounded-full text-sm text-white">
              {skill}
            </span>
          ))}
        </div>
      ),
      header: "Skills",
      className: "md:col-span-1",
    },
    {
      title: "題解",
      description: (
        <div className="relative">
          <div className="absolute -top-11 right-0">
            <a href={`${basePath}/solutions/`} className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
              More
              <span className="text-lg">→</span>
            </a>
          </div>
          <SolutionsGrid solutions={solutions} limit={6} minimal />
        </div>
      ),
      header: "Solutions",
      className: "md:col-span-2",
    },
    {
      title: "作品集",
      description: <GitHubProjects />,
      header: "Portfolio",
      className: "md:col-span-3",
    },
  ];

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
        <div className="absolute inset-0 bg黑色/70" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <div className="h-screen w-full flex flex-col items-center justify-center">
          <h1 className="md:text-7xl text-4xl lg:text-8xl font-bold text-center text-white mb-6">
            羊羊的程式日記
          </h1>
          <p className="text-neutral-200 text-xl md:text-2xl">
            學生 / 程式設計師 / 開發者
          </p>
        </div>

        {/* Bento Grid Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <BentoGrid className="mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
              />
            ))}
          </BentoGrid>
        </section>
      </div>
    </div>
  );
}
