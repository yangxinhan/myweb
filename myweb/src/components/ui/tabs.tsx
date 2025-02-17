"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/utils/cn";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (active: Tab) => {
    setActive(active);
  };

  return (
    <div className={cn("flex flex-col gap-10 w-full", containerClassName)}>
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => {
              moveSelectedTabToTop(tab);
            }}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors text-white/60",
              tab.value === active.value && ["text-white", activeTabClassName],
              tabClassName
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="w-full h-full relative overflow-hidden">
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="relative h-full"
        >
          {active.content}
        </motion.div>
      </div>
    </div>
  );
};
