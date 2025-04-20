"use client";
import { cn } from "@/utils/cn";

interface BentoGridItemProps {
  title: string;
  description: string;
  header?: React.ReactNode;
  className?: string;
}

export function BentoGridItem({
  title,
  description,
  header,
  className,
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "group relative col-span-1 row-span-1 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors",
        className
      )}
    >
      <div className="flex flex-col gap-2 p-6">
        {header}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-white/60 whitespace-pre-line">{description}</p>
        </div>
      </div>
    </div>
  );
}
