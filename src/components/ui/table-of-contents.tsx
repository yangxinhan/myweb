"use client";
import { useEffect, useState } from 'react';

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    // 從內容中提取標題
    const matches = content.matchAll(/^(#{1,6})\s+(.+)$/gm);
    const headingsArray = Array.from(matches).map(match => ({
      id: match[2].toLowerCase().replace(/\s+/g, '-'),
      text: match[2],
      level: match[1].length
    }));
    setHeadings(headingsArray);
  }, [content]);

  return (
    <div className="sticky top-24">
      <h3 className="text-lg font-semibold text-white mb-4">目錄</h3>
      <nav className="space-y-2">
        {headings.map((heading, index) => (
          <a
            key={index}
            href={`#${heading.id}`}
            className={`block text-white/60 hover:text-white transition-colors ${
              heading.level === 1 ? 'text-sm' :
              heading.level === 2 ? 'text-sm pl-4' :
              'text-xs pl-8'
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
