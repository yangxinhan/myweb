"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const basePath = process.env.NODE_ENV === 'production' ? '/myweb' : '';

  const links = [
    { href: '/', label: '首頁' },
    { href: '/solutions', label: '題解' },
    { href: '/portfolio', label: '作品集' },
    { href: '/archive', label: '歸檔' },
    { href: '/blog', label: '文章' },
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
                className={`text-sm ${
                  pathname === `${basePath}${link.href}`
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
