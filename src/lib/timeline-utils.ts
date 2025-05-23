import { getAllBlogPosts } from './mdx';
import { solutions } from './solutions';  // 添加這行導入

// 將介面導出
export interface TimelineItem {
  type: 'project' | 'solution' | 'blog';
  title: string;
  date: string;
  link: string;
  description?: string;
}

interface GitHubRepo {
  name: string;
  created_at: string;
  description: string | null;
}

// 簡化 getSolutions 函數
function getSolutions(): TimelineItem[] {
  return solutions.map(solution => ({
    type: 'solution' as const,
    title: solution.title,
    date: solution.date || "2024-02-18",
    link: `/solutions#${solution.id}`,
    description: `${solution.difficulty}, ${solution.platform}`
  }));
}

export async function getAllTimelineItems(): Promise<TimelineItem[]> {
  const items: TimelineItem[] = [];

  // 獲取部落格文章
  const blogPosts = await getAllBlogPosts();
  items.push(...blogPosts.map(post => ({
    type: 'blog' as const,
    title: post.title,
    date: post.date,
    link: `/myweb/blog/${post.slug}`,
    description: post.description
  })));

  // 從 GitHub API 獲取專案
  try {
    const response = await fetch('https://api.github.com/users/yangxinhan/repos');
    const repos: GitHubRepo[] = await response.json();
    items.push(...repos.map((repo) => ({
      type: 'project' as const,
      title: repo.name,
      date: repo.created_at,
      link: `/myweb/portfolio?repo=${repo.name}`,
      description: repo.description || undefined
    })));
  } catch (error) {
    console.error('Error fetching repos:', error);
  }

  // 獲取題解
  const solutionItems = getSolutions();
  items.push(...solutionItems.map(solution => ({
    ...solution,
    link: `/myweb/solutions${solution.link}`
  })));

  // 依照日期排序
  return items.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
