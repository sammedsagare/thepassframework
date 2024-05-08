import type { Metadata } from "next";
import { Onest } from "next/font/google";

import "./globals.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const onset = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thepassframework",
  description: "An IDS Framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onset.className}>
        <div className="bg-white text-black px-6 md:px-24">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
