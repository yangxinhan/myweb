"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  HomeIcon, 
  CodeBracketIcon,
  FolderIcon,
  ArchiveBoxIcon,
  DocumentTextIcon 
} from '@heroicons/react/24/outline';

export function Navbar() {
  const pathname = usePathname();


  const links = [
    { href: '/', label: '首頁', icon: HomeIcon },
    { href: '/solutions', label: '題解', icon: CodeBracketIcon },
    { href: '/portfolio', label: '作品集', icon: FolderIcon },
    { href: '/archive', label: '歸檔', icon: ArchiveBoxIcon },
    { href: '/blog', label: '文章', icon: DocumentTextIcon },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl tracking-tight hover:text-white/80 transition-colors">
            羊羊的程式日記
          </Link>
          <div className="flex gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
