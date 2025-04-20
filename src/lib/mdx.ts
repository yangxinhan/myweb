import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description?: string;
  content: string; // 改為明確的類型
}

export async function getAllBlogPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(async fileName => {
        const post = await getBlogPost(fileName.replace(/\.mdx$/, ''));
        return {
          ...post,
          content: undefined // 不在列表中包含完整內容
        };
      })
  );

  // 依照日期排序
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);
  const { title, date, description } = data;

  return {
    slug,
    title,
    date,
    description,
    content
  };
}
