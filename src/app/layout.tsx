import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PageTransition } from "../components/ui/page-transition";
import 'highlight.js/styles/atom-one-dark.css'; // 新增這行

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "羊羊的程式日記",
  description: "軟體工程師 / 前端開發者",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
