"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const basePath = process.env.NODE_ENV === 'production' ? '/myweb' : '';

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-2xl">
              羊羊的程式日記
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <Link 
              href={`${basePath}/`}
              className={`text-white/70 hover:text-white transition-colors ${pathname === '/' ? 'text-white' : ''}`}
            >
              首頁
            </Link>
            <Link
              href={`${basePath}/solutions/`}
              className={`text-white/70 hover:text-white transition-colors ${pathname === '/solutions' ? 'text-white' : ''}`}
            >
              題解
            </Link>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors">
              作品集
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">
              聯絡我
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
