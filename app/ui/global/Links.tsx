"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
                  pathname === item.href ? "border-opacity-100 text-global" : ""
                }`}
              >
                {item.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className="absolute -top-1 -right-3"
                >
                  <path
                    fill="currentColor"
                    d="M10.74 10.75L12 8l1.25 2.75L16 12l-2.75 1.26L12 16l-1.26-2.74L8 12z"
                  />
                </svg>
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
                  pathname === item.href ? "border-opacity-100 text-global" : ""
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
