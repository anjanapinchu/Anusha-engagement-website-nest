import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Our Forever Begins Here 💍",
  description: "Our engagement story — where our story began, how we found our way to each other, and our promise of forever.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
