import { TimelineItem } from '../../lib/timeline-utils';

interface ArchiveStatsProps {
  items: TimelineItem[];
}

export function ArchiveStats({ items }: ArchiveStatsProps) {
  // 將字串首字母大寫的輔助函數
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  // 年份統計
  const yearStats = items.reduce((acc, item) => {
    const year = new Date(item.date).getFullYear();
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  // 標籤統計 - 首字母大寫
  const tagStats = items.reduce((acc, item) => {
    if (item.type === 'solution') {
      const [difficulty, category] = (item.description || '').split(', ');
      if (difficulty) {
        const capDifficulty = capitalize(difficulty);
        acc[capDifficulty] = (acc[capDifficulty] || 0) + 1;
      }
      if (category) {
        const capCategory = capitalize(category);
        acc[capCategory] = (acc[capCategory] || 0) + 1;
      }
    }
    const capType = capitalize(item.type);
    acc[capType] = (acc[capType] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-8 sticky top-24">
      {/* 年份統計 */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
        <h3 className="text-lg font-medium text-white mb-4">年份統計</h3>
        <div className="space-y-2">
          {Object.entries(yearStats)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, count]) => (
              <div key={year} className="flex justify-between items-center text-sm">
                <span className="text-white">{year}</span>
                <span className="text-white/60">{count} 個項目</span>
              </div>
            ))}
        </div>
      </div>

      {/* 標籤統計 */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
        <h3 className="text-lg font-medium text-white mb-4">標籤統計</h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(tagStats)
            .sort(([, a], [, b]) => b - a)
            .map(([tag, count]) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-full text-sm bg-white/10 text-white/80"
              >
                {tag} ({count})
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
