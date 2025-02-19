import { Navbar } from "../../components/ui/navbar";
import { Timeline } from "../../components/ui/timeline";
import Image from "next/image";
import { getAllTimelineItems } from "../../lib/timeline-utils";

export default async function ArchivePage() {
  const timelineItems = await getAllTimelineItems();

  return (
    <div className="w-full min-h-screen bg-black relative">
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
        <Navbar />
        <div className="container mx-auto px-4 pt-24">
          <h1 className="text-3xl font-bold text-white mb-8">歸檔</h1>
          <div className="max-w-3xl mx-auto">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
