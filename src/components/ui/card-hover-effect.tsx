"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";

interface Item {
  link: string;
  header: string;
  description: string;
}

export const HoverEffect = ({ items, className }: { items: Item[]; className?: string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link}
          className="relative group block p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className={cn(
            "relative p-4 h-full bg-white/5 rounded-xl transition-all duration-300",
            hoveredIndex === idx ? "scale-[1.02] bg-white/10" : ""
          )}>
            <div className="relative z-50">
              <div className="p-4">
                <h4 className="text-zinc-100 font-bold tracking-wide mt-4">{item.header}</h4>
                <p className="mt-2 text-neutral-300 tracking-wide leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
