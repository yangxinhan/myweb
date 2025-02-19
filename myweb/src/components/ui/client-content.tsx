"use client";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import { TableOfContents } from './table-of-contents';

interface ClientContentProps {
  post: {
    content: string;
  };
}

export function ClientContent({ post }: ClientContentProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <article className="prose prose-invert max-w-none
          prose-h1:text-5xl prose-h1:font-bold prose-h1:mt-12 prose-h1:mb-6
          prose-h2:text-4xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-6
          prose-h3:text-3xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-4
          prose-h4:text-2xl prose-h4:font-semibold prose-h4:mt-6 prose-h4:mb-4
          prose-h5:text-xl prose-h5:font-medium prose-h5:mt-4 prose-h5:mb-3
          prose-h6:text-lg prose-h6:font-medium prose-h6:mt-4 prose-h6:mb-3
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:my-4
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-li:text-gray-300 prose-li:my-1
          prose-code:text-pink-400 prose-code:bg-black/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-black/30 prose-pre:border prose-pre:border-gray-700 
          prose-pre:p-4 prose-pre:rounded-lg prose-pre:my-6
          prose-blockquote:border-l-4 prose-blockquote:border-gray-700
          prose-blockquote:pl-4 prose-blockquote:my-4 prose-blockquote:italic
          prose-img:rounded-lg prose-img:my-6
          prose-hr:my-8 prose-hr:border-gray-800">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, [rehypeHighlight, { detect: true }]]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <pre className={className + " relative"}>
                    <div className="absolute top-0 right-0 px-2 py-1 text-xs text-gray-400 bg-black/40 rounded-bl">
                      {match[1]}
                    </div>
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              img: ({ ...props }) => (
                <img className="max-w-full mx-auto" {...props} alt={props.alt || ''} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
      <aside className="lg:col-span-1 hidden lg:block">
        <TableOfContents content={post.content} />
      </aside>
    </div>
  );
}
