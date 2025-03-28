"use client";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

interface ClientContentProps {
  content: string; 
}

export function ClientContent({ content }: ClientContentProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeHighlight, { detect: true }]]}
        components={{
          img: ({ node, alt, src, ...props }) => (
            <img 
              src={src}
              alt={alt || ''}
              className="rounded-lg w-full"
              {...props}
            />
          ),
          a: ({ node, children, href, ...props }) => (
            <a 
              href={href}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 no-underline"
              {...props}
            >
              {children}
            </a>
          ),
          code: ({node, inline, className, children, ...props}) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <pre className="bg-gray-900 rounded-lg p-4">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            ) : (
              <code className="bg-gray-800 rounded px-1" {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
