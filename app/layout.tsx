import type { Metadata } from "next";
import Navbar from "@/app/ui/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "mCell's WorkSpace",
    template: "%s | mCell's WorkSpace",
  },
  description: "mCell's WorkSpace - 邓军辉的工作台",
  keywords: ["mCell", "WorkSpace", "mCell's WorkSpace", "邓军辉的工作台"],
  icons: {
    icon: "/cell.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="select-none w-screen h-screen text-black bg-gray-50 font-sans antialiased flex items-center pt-24">
        <div className="h-16 w-full fixed top-0 z-40 backdrop-blur flex justify-center border-b">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
