import type { Metadata } from "next";

import Navbar from "@/app/ui/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "mCell's blog",
    template: "%s | mCell's blog",
  },
  description: "mCell's blog",
  keywords: ["mCell", "blog"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* return (
      <html lang="en">
        <body className="w-screen h-screen text-black bg-gray-50 font-mono antialiased flex items-center ">
          <div className="w-[87.5%] h-screen flex items-center justify-center px-8">
            {children}
          </div>
        </body>
      </html>
    ); */
  return (
    <html lang="en">
      <body className="w-screen h-screen text-white bg-global font-mono antialiased flex items-center ">
        <div className="h-[87.5%] w-1/6">
          <Navbar />
        </div>
        <div className="w-[1px] h-[87.5%] bg-white animate-pulse" />
        <div className="w-[87.5%] h-screen flex items-center justify-center px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
