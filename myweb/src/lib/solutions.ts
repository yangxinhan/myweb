export interface Solution {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  platform: 'LeetCode' | 'ASOJ' | 'AtCoder' | 'Kattis' | 'TOJ' | 'UVa' | 'Codeforces' | 'ZeroJudge';
  link: string;
  date: string;
  description?: string;
  problem?: string;
  code?: string;
  tags?: string[];
  solution?: string;
  language?: 'cpp' | 'python' | 'javascript';
}

export const solutions: Solution[] = [
    {
        id: 1,
        title: "ASOJ B04 成績等第換算-1",
        difficulty: "Easy",
        platform: "ASOJ",
        link: "https://apcs-simulation.com/contest/10/problem/B04",
        date: "2024-10-17",
        problem: "為了方便統計所有學員的成績分布，將原始成績轉換成等第若分數介於 90~ 100輸出 S，介於 80~ 89輸出 A，介於 70 ~ 79 輸出 B，介於 60 ~ 69 輸出 C，介於 50 ~ 59 輸出 D，介於 40 ~ 49 輸出 E，其餘輸出 F",
        code: `#include <iostream>
    using namespace std;
    
    int main() {
        int n;
        cin >> n;
        if (n >= 90 && n <= 100) {
            cout << "S";
        } else if (n >= 80 && n < 90) {
            cout << "A";
        } else if (n >= 70 && n < 80) {
            cout << "B";
        } else if (n >= 60 && n < 70) {
            cout << "C";
        } else if (n >= 50 && n < 60) {
            cout << "D";
        } else if (n >= 40 && n < 50) {
            cout << "E";
        } else {
            cout << "F";
        }
    
        return 0;
    }`,
        tags: ["if-else"],
        solution: "",
        language: "cpp",
      },
      {
        id: 2,
        title: "ASOJ B05 成績等第換算-2",
        difficulty: "Easy",
        platform: "ASOJ",
        link: "https://apcs-simulation.com/contest/10/problem/B05",
        date: "2024-10-17",
        problem: "為了方便統計所有學員的數學成績分布，將原始成績轉換成等第若分數介於 90以上輸出 S，介於 80以上輸出 A，介於 70以上輸出 B，介於 60以上輸出 C，介於 50以上輸出 D，介於 40以上輸出 E，其餘輸出 F",
        code: `#include <iostream>
    using namespace std;
    
    int main() {
        double n;
        cin >> n;
        if (n >= 90 && n <= 100) {
            cout << "S";
        } else if (n >= 80 && n < 90) {
            cout << "A";
        } else if (n >= 70 && n < 80) {
            cout << "B";
        } else if (n >= 60 && n < 70) {
            cout << "C";
        } else if (n >= 50 && n < 60) {
            cout << "D";
        } else if (n >= 40 && n < 50) {
            cout << "E";
        } else {
            cout << "F";
        }
    
        return 0;
    }`,
        tags: ["if-else"],
        solution: "",
        language: "cpp",
      },
      {
        id: 3,
        title: "ASOJ B06 成績等第換算-3",
        difficulty: "Easy",
        platform: "ASOJ",
        link: "https://apcs-simulation.com/contest/10/problem/B06",
        date: "2024-10-17",
        problem: "為了方便統計所有學員的數學學測成績分布，將 113 年學測國文原始成績轉換成級分",
        code: `#include <iostream>
    using namespace std;
    
    int main() {
        double n;
        cin >> n;
        if(n >74.06 && n <= 100){
            cout << 15;
        }else if(n > 68.77 && n <= 74.06){
            cout << 14;
        }else if(n > 63.48 && n <= 68.77){
            cout << 13;
        }else if(n > 58.19 && n <= 63.48){
            cout << 12;
        }else if(n > 52.90 && n <= 58.19){
            cout << 11;
        }else if(n > 47.61 && n <= 52.90){
            cout << 10;
        }else if(n > 42.32 && n <= 47.61){
            cout << 9;
        }else if(n > 37.03 && n <= 42.32){
            cout << 8;
        }else if(n > 31.74 && n <= 37.03){
            cout << 7;
        }else if(n > 26.45 && n <= 31.74){
            cout << 6;
        }else if(n > 21.16 && n <= 26.45){
            cout << 5;
        }else if(n > 15.87 && n <= 21.16){
            cout << 4;
        }else if(n > 10.58 && n <= 15.87){
            cout << 3;
        }else if(n > 5.29 && n <= 10.58){
            cout << 2;
        }else if(n > 0 && n <= 5.29){
            cout << 1;
        }else{
            cout << 0;
        }
    
        return 0;
    }`,
        tags: ["if-else"],
        solution: "",
        language: "cpp",
      },
      {
        id: 4,
        title: "ASOJ B07 極值的差",
        difficulty: "Easy",
        platform: "ASOJ",
        link: "https://apcs-simulation.com/contest/10/problem/B07",
        date: "2024-10-17",
        problem: "請找出三個數字的最大值和最小值的差",
        code: `#include <iostream>
    using namespace std;
    #define ll long long
    
    int main() {
        ll a, b, c, max, min;
        cin >> a >> b >> c;
        max = a > b ? (a > c ? a : c) : (b > c ? b : c);
        min = a < b ? (a < c ? a : c) : (b < c ? b : c);
        cout << max - min;
    
        return 0;
    }`,
        tags: ["if-else"],
        solution: "",
        language: "cpp",
      },
      {
        id: 5,
        title: "ASOJ B08 學習時間",
        difficulty: "Easy",
        platform: "ASOJ",
        link: "https://apcs-simulation.com/contest/10/problem/B08",
        date: "2024-10-17",
        problem: "APCSS x APCS Guide Camp 為了提升大家的程式能力，每天不定時選擇一個時段集合學員宣布事情 or 一起練習打扣，請檢查當下時刻是否為學習時間",
        code: `#include <iostream>
    using namespace std;
    
    int main(){
        int sh, sm, eh, em, h, m;
        cin >> sh >> sm >> eh >> em;
        cin >> h >> m;
        if(h *60 + m >= sh * 60 + sm && h * 60 + m <= eh * 60 + em){
            cout << "Learning";
        }else{
            cout << "Break";
        }
        return 0;
    }`,
        tags: ["if-else"],
        solution: "",
        language: "cpp",
      },
      {
        id: 6,
        title: "ASOJ B13 學習時間",
        difficulty: "Easy",
        platform: "ASOJ",
        link: "https://apcs-simulation.com/contest/10/problem/B13",
        date: "2024-10-17",
        problem: `週年慶被視為百貨公司年度最大盛事，每年週年慶開跑，各家百貨公司為了吸引眾多的顧客，紛紛推出各種超高優惠來滿足顧客、與其他公司競爭。
        天天百貨公司今年推出的優惠為商品每滿兩千折兩百，而天天百貨最大的競爭對手，琪琪百貨則是以商品每滿一千折一百的優惠來與天天對抗。
        小明來到兩家百貨公司，精打細算的他想知道要去哪家百貨公司才可以在週年慶得到最大的好康，請你幫小明撰寫一支程式來判斷。`,
        code: `#include <iostream>
    using namespace std;
    
    int main() {
        int n, a, b;
        int arr[2][3] = {{1, 1000, 100},
                         {0, 2000, 200}};
        cin >> n;
        a = n - ((n / arr[0][1]) * arr[0][2]);
        b = n - ((n / arr[1][1]) * arr[1][2]);
        if (a < b) {
            cout << a << " " << arr[0][0];
        }else if (a > b) {
            cout << b << " " << arr[1][0];
        }else if (a == b) {
            cout << a << " " << arr[1][0];
        }
        return 0;
    }`,
        tags: ["if-else"],
        solution: "",
        language: "cpp",
      },
      {
        id: 7,
        title: "AtCoder abc051_b Sum of Three Integers",
        difficulty: "Easy",
        platform: "AtCoder",
        link: "https://atcoder.jp/contests/abc051/tasks/abc051_b",
        date: "2024-11-03",
        problem: `You are given two integers K and S.
                Three variable X, Y and Z takes integer values satisfying 0 ≤ X, Y, Z ≤ K.
                How many different assignments of values to X, Y and Z are there such that X + Y + Z = S?`,
        code: `#include <iostream>
using namespace std;

int main() {
    int k, s, count = 0;
    cin >> k >> s;

    for (int x = 0; x <= k; x++) {
        for (int y = 0; y <= k; y++) {
            int z = s - x - y;
            if (z >= 0 && z <= k) {
                count++;
            }
        }
    }

    cout << count << endl;
    return 0;
}`,
        tags: ["fro", "if-else"],
        solution: "",
        language: "cpp",
      },
  // ...其他題解
];
