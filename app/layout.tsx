import type { Metadata } from "next";
import Navbar from "@/app/ui/Navbar";

import BotCell from "@/app/ui/bot/BotCell";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: {
    default: "mCell's WorkSpace",
    template: "%s | mCell's WorkSpace",
  },
  description: "mCell's WorkSpace - 邓军辉的工作台",
  keywords: ["mCell", "WorkSpace", "mCell's WorkSpace", "邓军辉的工作台"],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="select-none w-[100%] h-[100%] text-black bg-gray-50 font-sans antialiased flex items-center">
        <header className="h-16 w-full fixed top-0 z-40 backdrop-blur flex justify-center border-b">
          <Navbar />
        </header>
        {children}
        <BotCell />
        <ToastContainer autoClose={4000} stacked />
      </body>
    </html>
  );
}
