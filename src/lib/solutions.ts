export interface Solution {
  id: number;
  title: string;
  difficulty: string;
  platform: string;
  link: string;
  date: string;
  tags: string[];
  slug: string;
  problem?: string;
  solution?: string;
  code?: string;
  language?: string;
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
    slug: "two-sum",
    problem: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    solution: "Use a hash map to store the complement of each number.",
    code: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> m;
        for (int i = 0; i < nums.size(); i++) {
            if (m.count(target - nums[i])) {
                return {m[target - nums[i]], i};
            }
            m[nums[i]] = i;
        }
        return {};
    }
};`,
    language: "cpp"
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    platform: "LeetCode",
    link: "https://leetcode.com/problems/add-two-numbers/",
    date: "2023-01-02",
    tags: ["Linked List", "Math"],
    slug: "add-two-numbers",
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    platform: "LeetCode",
    link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    date: "2023-01-03",
    tags: ["String", "Sliding Window"],
    slug: "longest-substring-without-repeating-characters",
  },
];
