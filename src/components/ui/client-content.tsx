"use client";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ClientContentProps {
  content: string; 
}

type CodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  inline?: boolean;
};

function remarkAdmonitions() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        if (node.name !== 'info') return;

        const data = node.data || (node.data = {});
        const tagName = node.type === 'textDirective' ? 'span' : 'div';

        data.hName = tagName;
        data.hProperties = {
          className: 'admonition-info bg-blue-500/10 border-l-4 border-blue-500 pl-4 py-2 pr-4 my-4 rounded-r-lg text-white/90',
          ...node.attributes,
        };
      }
    });
  };
}

export function ClientContent({ content }: ClientContentProps) {
  return (
    <div className="prose prose-lg prose-invert max-w-none 
      prose-headings:font-bold prose-headings:tracking-tight
      prose-h1:text-4xl prose-h1:bg-gradient-to-br prose-h1:from-white prose-h1:to-white/70 prose-h1:bg-clip-text prose-h1:text-transparent prose-h1:mb-8
      prose-h2:text-3xl prose-h2:text-white prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
      prose-h3:text-2xl prose-h3:text-white/90 prose-h3:mt-8 prose-h3:mb-4
      prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-6
      prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 hover:prose-a:underline prose-a:transition-colors
      prose-strong:text-white prose-strong:font-semibold
      prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6 prose-li:text-white/80 prose-li:mb-2
      prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-6
      prose-blockquote:border-l-4 prose-blockquote:border-blue-500/50 prose-blockquote:bg-white/5 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-white/70
      prose-code:text-blue-300 prose-code:bg-blue-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:p-0
      prose-img:rounded-xl prose-img:shadow-2xl prose-img:border prose-img:border-white/10 prose-img:my-8
      prose-hr:border-white/10 prose-hr:my-12
      prose-table:w-full prose-table:my-8 prose-table:border-collapse
      prose-th:text-left prose-th:p-4 prose-th:border-b prose-th:border-white/10 prose-th:text-white prose-th:bg-white/5
      prose-td:p-4 prose-td:border-b prose-td:border-white/5 prose-td:text-white/70
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkDirective, remarkAdmonitions]}
        rehypePlugins={[rehypeRaw, [rehypeHighlight, { detect: true }]]}
        components={{
          a: ({ children, href, ...props }) => (
            <a 
              href={href}
              target="_blank"
              rel="noopener noreferrer" 
              {...props}
            >
              {children}
            </a>
          ),
          code: ({ inline, className, children, ...props }: CodeProps) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <div className="relative group">
                <div className="absolute top-3 right-3 px-2 py-1 text-xs font-mono text-white/40 bg-white/5 rounded opacity-0 group-hover:opacity-100 transition-opacity select-none">
                  {match[1]}
                </div>
                <pre className="!bg-[#0d1117] !m-0 !p-6 overflow-x-auto rounded-xl">
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          img: ({ src, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
            <span className="block relative group">
              <img
                src={src}
                alt={alt}
                className="w-full h-auto rounded-xl shadow-2xl border border-white/10 transition-transform duration-300 group-hover:scale-[1.01]"
                {...props}
              />
              {alt && (
                <span className="block text-center text-sm text-white/40 mt-2 italic">
                  {alt}
                </span>
              )}
            </span>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
