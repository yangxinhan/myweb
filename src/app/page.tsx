"use client";
import { Navbar } from "../components/ui/navbar";
import { SolutionsGrid } from "../components/ui/solutions-collection";
import { FaGithub, FaInstagram, FaFacebook, FaDiscord, FaLinkedin, FaMailchimp } from "react-icons/fa";
import GithubProjects from "../components/ui/github-projects";
import Image from "next/image";
import { solutions } from "../lib/solutions"; // 確保導入 solutions



export default function Home() {
  const basePath = process.env.NODE_ENV === 'production' ? '/myweb' : '';

  
  const items = [
    {
      title: "個人簡介",
      description: "楊昕翰\n暱稱：羊羊\n",
      header: (
        <div className="flex items-center justify-center w-full h-full bg-neutral-900/50 rounded-xl p-4">
          <div className="relative w-32 h-32">
            <Image
              src={`${basePath}/profile.jpg`}
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
      title: "經歷",
      description: "🎓靜宜大學資訊管理學系一年級\n🎥SITCON2025 製播組 組員\n🎥COSCUP2025 製播組 組員\n🎥SITCON2026 製播組 組員",
      header: "Experience",
      className: "md:col-span-2",
    },
    {
      title: "關於我",
      description: "一個學生，一個開發者，四處拼湊的技能",
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
          <a href="https://instagram.com/yan.g404" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <FaInstagram/>
          </a>
          <a href="https://www.facebook.com/share/164AWci5f3/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <FaFacebook/>
          </a>
          <a href="https://discord.com/users/1064141576512745542" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <FaDiscord />
          </a>
          <a href="https://linkedin.com/in/昕翰-楊-93678b351" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <FaLinkedin />
          </a>
          <a href="mailto:xinhanyang061@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <FaMailchimp />
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
          {["HTML","CSS", "JavaScript", "TypeScript", "C", "C#", "C++",
           "Python", "Swift", "Java", "React", "Markdown", "Arduino", "Bots",
           "Ros","Discordjs", "Node.js", "npm" , "Opencv", "Pytorch", "Unity",
           "Unreal", "Anaconda", "Azure", "Blender", "Docker", "Figma",
           "Firebase", "Git", "Github", "Gitlab", "MySQL", "Notion",
           "PhotoShop", "Premiere", "Pycharm", "VisualStudio", "VScode", 
           "Apple", "windows", "Linux", "Kali", "Raspberry Pi"].map((skill) => (
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
            <a
              href="/solutions"
              className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
            >
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
      description: <GithubProjects />,
      header: "Portfolio",
      className: "md:col-span-3",
    },
  ];

  return (
    <div className="w-full min-h-screen relative">


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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <div 
                key={i} 
                className={`p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 ${item.className}`}
              >
                <div className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {item.title}
                </div>
                {typeof item.header !== 'string' && (
                  <div className="mb-4">{item.header}</div>
                )}
                <div className="text-neutral-300 whitespace-pre-wrap leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
