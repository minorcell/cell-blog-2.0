"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkle } from "lucide-react";

const barData = [
  {
    href: "/",
    title: "首页",
  },
  {
    href: "/blog",
    title: "博客录",
  },
  {
    href: "/work",
    title: "作品集",
  },
  {
    href: "/bot",
    title: "Bot",
  },
  {
    href: "/info",
    title: "有话说",
  },
];

export default function Links() {
  const pathname = usePathname();

  return (
    <ul className="w-3/5 h-full flex items-center text-xl font-semibold">
      {barData.map((item, index) => {
        if (item.href === "/bot") {
          return (
            <li
              key={item.href + index}
              className="w-1/5 h-full flex items-center justify-start overflow-hidden"
            >
              <Link
                href={item.href}
                className={`relative px-2 duration-500 hover:text-global hover:border-opacity-100 h-2/3 flex items-center justify-center border-b-2 border-global border-opacity-0 ${
                  pathname === item.href
                    ? "border-opacity-100 text-global"
                    : "text-gray-600"
                }`}
              >
                {item.title}
                <Sparkle className="absolute top-0 -right-1 h-3 w-3" />
              </Link>
            </li>
          );
        } else {
          return (
            <li
              key={item.href + index}
              className="w-1/5 h-full flex items-center justify-start overflow-hidden"
            >
              <Link
                href={item.href}
                className={`px-2 duration-500 hover:text-global hover:border-opacity-100 h-2/3 flex items-center justify-center border-b-2 border-global border-opacity-0 ${
                  pathname === item.href
                    ? "border-opacity-100 text-global"
                    : "text-gray-600"
                }`}
              >
                {item.title}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
}
