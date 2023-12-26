import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animeholia",
  description: "All your favorite anime in one place. Be an animeholic!",
  openGraph: {
    type: "website",
    url: "https://animeholia.vercel.app/",
    title: "Animeholia",
    description: "All your favorite anime in one place. Be an animeholic!",
    images: [
      {
        url: "https://i.postimg.cc/wBsNbv1J/anime.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="mx-auto bg-[#0F1117]">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
