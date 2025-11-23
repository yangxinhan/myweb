import { Metadata } from 'next';


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

      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </>
  );
}
