"use client";
import { motion } from "framer-motion";

export const SkillList = () => {
  const skills = [
    {
      category: "前端開發",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      category: "後端技術",
      items: ["Node.js", "Express", "Python", "SQL"],
    },
    {
      category: "開發工具",
      items: ["Git", "VS Code", "Docker", "AWS"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-white/5 rounded-lg p-6 backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            {skill.category}
          </h3>
          <ul className="space-y-2">
            {skill.items.map((item) => (
              <li
                key={item}
                className="text-neutral-300 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};
