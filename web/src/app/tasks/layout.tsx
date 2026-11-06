import type { Metadata } from "next";

export const metadata: Metadata = { title: "任务" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
