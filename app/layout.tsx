import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helium AI Demo Gallery",
  description:
    "AI orchestration workflows, demos, and real-world use cases powered by Helium AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
