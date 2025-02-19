"use client";
import { format } from 'date-fns';
import Link from 'next/link';

interface TimelineItem {
  type: 'project' | 'solution' | 'blog';
  title: string;
  date: string;
  link: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const sortedItems = [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // 按年份分組
  const groupedByYear: Record<string, TimelineItem[]> = {};
  sortedItems.forEach(item => {
    const year = new Date(item.date).getFullYear().toString();
    if (!groupedByYear[year]) {
      groupedByYear[year] = [];
    }
    groupedByYear[year].push(item);
  });

  // 將年份轉換為陣列並排序（從新到舊）
  const sortedYears = Object.keys(groupedByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="relative">
      {/* 時間軸線 */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/20" />
      <div className="space-y-16">
        {sortedYears.map(year => (
          <div key={year} className="relative">
            <div className="sticky top-24 z-10 mb-8 ml-12">
              <h2 className="inline-block text-2xl font-bold text-white/80 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                {year}
              </h2>
            </div>
            <div className="space-y-8">
              {groupedByYear[year].map((item, index) => (
                <Link
                  key={`${item.type}-${index}`}
                  href={item.link}
                  className="block relative pl-6"
                >
                  {/* 時間點 */}
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-black/80 border-2 border-white/20 group-hover:border-white/40 transition-colors" />
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors" />
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-colors group">
                    <time className="text-sm text-white/60">
                      {format(new Date(item.date), 'MM/dd')}
                    </time>
                    <div className="mt-2">
                      <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <span className="ml-2 text-sm text-white/60">
                        {item.type === 'project' && '作品'}
                        {item.type === 'solution' && '題解'}
                        {item.type === 'blog' && '文章'}
                      </span>
                    </div>
                    {item.description && (
                      <p className="mt-1 text-sm text-white/80">{item.description}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
