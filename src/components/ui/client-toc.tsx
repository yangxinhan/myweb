"use client";
import { TableOfContents } from './table-of-contents';

export default function ClientTableOfContents({ content }: { content: string }) {
  return <TableOfContents content={content} />;
}
