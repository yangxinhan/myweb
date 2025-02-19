"use client";
import MarkdownContent from './markdown-content';

export default function ClientMarkdown({ content }: { content: string }) {
  return <MarkdownContent content={content} />;
}
