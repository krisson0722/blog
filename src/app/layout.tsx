import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.edition}`,
  description: profile.intro
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
