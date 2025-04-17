"use client";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Props {
  owner: string;
  repo: string;
}

interface GitHubFile {
  name: string;
  url: string;
}

export function ProjectReadme({ owner, repo }: Props) {
  const [readme, setReadme] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // 先嘗試獲取 README.md
        let response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/contents/README.md`,
          {
            headers: {
              Accept: 'application/vnd.github.raw',
            },
          }
        );

        // 如果找不到 README.md，嘗試獲取其他 .md 檔案
        if (!response.ok) {
          // 獲取倉庫根目錄的所有檔案
          const dirResponse = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/contents/`
          );
          const files: GitHubFile[] = await dirResponse.json();
          
          // 尋找第一個 .md 檔案
          const mdFile = files.find((file) => file.name.endsWith('.md'));
          
          if (mdFile) {
            response = await fetch(mdFile.url, {
              headers: {
                Accept: 'application/vnd.github.raw',
              },
            });
          } else {
            throw new Error('找不到任何 Markdown 檔案');
          }
        }

        if (response.ok) {
          const text = await response.text();
          setReadme(text);
          setError('');
        } else {
          throw new Error('無法讀取檔案內容');
        }
      } catch (error) {
        console.error('Error fetching content:', error);
        setError('無法讀取專案說明文件');
        setReadme('');
      }
    };

    if (owner && repo) {
      fetchContent();
    }
  }, [owner, repo]);

  if (error) {
    return <div className="text-white/60 text-center">{error}</div>;
  }

  return (
    <div className="prose prose-invert max-w-none 
      prose-h1:text-4xl prose-h1:font-bold prose-h1:border-b prose-h1:border-gray-700 prose-h1:pb-4 prose-h1:mb-6 prose-h1:!text-white prose-h1:tracking-tight
      prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:!text-white/90 prose-h2:tracking-tight
      prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:!text-white/80
      prose-h4:text-xl prose-h4:font-medium
      prose-h5:text-lg prose-h5:font-medium
      prose-h6:text-base prose-h6:font-medium
      prose-p:text-gray-300
      prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 hover:prose-a:underline
      prose-strong:text-white
      prose-code:text-white
      prose-pre:bg-black/40
      prose-blockquote:border-l-4 
      prose-blockquote:border-gray-500 
      prose-blockquote:pl-4
      prose-img:rounded-xl
      prose-li:text-gray-300
      [&>*]:scroll-mt-16">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeHighlight, { detect: true }]]}
        components={{
          img: ({ src, alt }) => {
            if (!src || typeof src !== 'string') {
              return null;
            }
            return (
              <div className="relative w-full h-64">
                <Image 
                  fill
                  src={src}
                  alt={alt || ''}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            );
          },
          a: ({ ...props }) => (
            <a target="_blank" rel="noopener noreferrer" {...props} />
          ),
          table: ({ ...props }) => (
            <div className="overflow-x-auto">
              <table {...props} />
            </div>
          ),
        }}
      >
        {readme}
      </ReactMarkdown>
    </div>
  );
}

