"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  HomeIcon, 
  CodeBracketIcon,
  FolderIcon,
  ArchiveBoxIcon,
  DocumentTextIcon 
} from '@heroicons/react/24/outline';

export function Navbar() {
  const pathname = usePathname();
  const basePath = process.env.NODE_ENV === 'production' ? '/myweb' : '';

  const links = [
    { href: '/', label: '首頁', icon: HomeIcon },
    { href: '/solutions', label: '題解', icon: CodeBracketIcon },
    { href: '/portfolio', label: '作品集', icon: FolderIcon },
    { href: '/archive', label: '歸檔', icon: ArchiveBoxIcon },
    { href: '/blog', label: '文章', icon: DocumentTextIcon },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={`${basePath}/`} className="text-white font-bold">
            羊羊的程式日記
          </Link>
          <div className="flex gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={`${basePath}${link.href}`}
                className={`text-sm flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  pathname === `${basePath}${link.href}`
                    ? 'text-white bg-white/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
