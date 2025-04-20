"use client";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';
import 'highlight.js/styles/github-dark.css';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-invert prose-pre:bg-black/40 prose-pre:border prose-pre:border-white/10 
      prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-8
      prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
      prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4
      prose-p:text-gray-300 prose-p:leading-relaxed
      prose-li:text-gray-300
      prose-code:text-blue-300 prose-code:bg-blue-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
      prose-pre:p-4 prose-pre:rounded-lg
      max-w-4xl mx-auto">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          img: ({ src, alt }) => {
            if (!src || typeof src !== 'string') return null;
            return (
              <div className="relative w-full h-[400px] my-4">
                <Image
                  src={src}
                  alt={alt || ''}
                  fill
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
        {content}
      </ReactMarkdown>
    </div>
  );
}
