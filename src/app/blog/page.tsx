import { Navbar } from "../../components/ui/navbar";
import { getAllBlogPosts } from "../../lib/mdx";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const basePath = process.env.NODE_ENV === 'production' ? '/myweb' : '';

  return (
    <div className="w-full min-h-screen bg-black relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/myweb/background.png"
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
          <h1 className="text-3xl font-bold text-white mb-8">部落格文章</h1>
          <div className="max-w-3xl mx-auto grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`${basePath}/blog/${post.slug}`}
                className="block bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
                <time className="text-sm text-white/60">
                  {new Date(post.date).toLocaleDateString('zh-TW')}
                </time>
                {post.description && (
                  <p className="mt-2 text-white/80">{post.description}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
