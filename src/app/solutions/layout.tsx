import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '題解列表 | 羊羊的個人網站',
  description: 'LeetCode、APCS 等程式題目解答',
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/背景.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </>
  );
}
