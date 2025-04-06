export interface Solution {
  id: number;
  title: string;
  difficulty: string;
  platform: string;
  link: string;
  date: string;
  tags?: string[];
}

// 確保 solutions 是一個有效的陣列，並包含所有題解
export const solutions: Solution[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    platform: "LeetCode",
    link: "https://leetcode.com/problems/two-sum/",
    date: "2023-01-01",
    tags: ["Array", "Hash Table"],
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    platform: "LeetCode",
    link: "https://leetcode.com/problems/add-two-numbers/",
    date: "2023-01-02",
    tags: ["Linked List", "Math"],
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    platform: "LeetCode",
    link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    date: "2023-01-03",
    tags: ["String", "Sliding Window"],
  },
];
