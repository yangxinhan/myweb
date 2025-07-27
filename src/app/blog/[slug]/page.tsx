import { getBlogPost, getAllBlogPosts } from '../../../lib/mdx';
import { Navbar } from '../../../components/ui/navbar';
import { ClientContent } from '../../../components/ui/client-content';
import Image from 'next/image';
import 'highlight.js/styles/github-dark.css';

interface GenerateParams {
  slug: string;
}

export default async function Page({
  params,
}: {
  params: Promise<GenerateParams>
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  const basePath = process.env.NODE_ENV === 'production' ? '/myweb' : '';

  return (
    <div className="w-full min-h-screen bg-black relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src={`${basePath}/background.png`}
          alt="Background"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 pt-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <time>{new Date(post.date).toLocaleDateString('zh-TW')}</time>
                {post.description && <span className="text-white/40">·</span>}
                {post.description && <span>{post.description}</span>}
              </div>
            </div>
            <ClientContent content={post.content} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams(): Promise<GenerateParams[]> {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
