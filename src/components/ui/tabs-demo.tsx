"use client";
import { Tabs } from "./tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Solutions",
      value: "solutions",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>演算法題解</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Blog",
      value: "blog",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-cyan-900">
          <p>技術文章</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Events",
      value: "events",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-emerald-900">
          <p>活動心得</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="text-base md:text-lg mt-4 text-white/80">
      <p>即將加入更多內容...</p>
    </div>
  );
};
