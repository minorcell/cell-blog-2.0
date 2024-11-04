"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const barData = [
  {
    href: "/",
    title: "首页",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="mr-4"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8m-2 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
        />
      </svg>
    ),
  },
  {
    href: "/blog",
    title: "博客",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="mr-4"
      >
        <path
          fill="currentColor"
          d="M3 9.009a6.01 6.01 0 0 1 6.01-6.01H12a6.01 6.01 0 0 1 6.01 5.982h.943c1.15 0 2.047.896 2.047 2.047v3.962A6.01 6.01 0 0 1 14.99 21H9.01A6.01 6.01 0 0 1 3 14.99zm6.01-4.01A4.01 4.01 0 0 0 5 9.01v5.981A4.01 4.01 0 0 0 9.01 19h5.98A4.01 4.01 0 0 0 19 14.99V11h-1c-1.076 0-2-.924-2-2c0-2.214-1.786-4-4-4zM8 9a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"
        />
      </svg>
    ),
  },
  {
    href: "/work",
    title: "作品",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="mr-4"
      >
        <path
          fill="currentColor"
          d="M3 21q-.825 0-1.412-.587T1 19V7q0-.425.288-.712T2 6t.713.288T3 7v12h16q.425 0 .713.288T20 20t-.288.713T19 21zm4-4q-.825 0-1.412-.587T5 15V4q0-.825.588-1.412T7 2h4.175q.4 0 .763.15t.637.425L14 4h7q.825 0 1.413.588T23 6v9q0 .825-.587 1.413T21 17zm0-2h14V6h-7.825l-2-2H7zm0 0V4z"
        />
      </svg>
    ),
  },
];

export default function Links() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-2/5 ">
      <ul className="w-full h-full flex flex-col items-center justify-evenly px-8">
        {barData.map((item, index) => (
          <li
            key={item.href + index}
            className={`w-2/3 h-1/6 flex items-center justify-center rounded-xl text-xl overflow-hidden ${
              pathname === item.href ? "border" : ""
            }`}
          >
            <Link
              href={item.href}
              className="w-full h-full flex items-center justify-center"
            >
              {item.icon}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
