"use client";

import useNumberTicker from "@/app/hooks/useNumberTicker";

import { BlogDataProps } from "@/app/lib/type/type";

export default function BlogData({ total }: BlogDataProps) {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4">
        <span className="text-red-500">博</span>{" "}
        <span className="text-yellow-500">客</span>{" "}
        <span className="text-blue-500">录</span>
      </h1>
      <div>
        <div>
          <p className="text-center text-gray-500">
            自2024年11月09日起，已发布
            {useNumberTicker(0, total, 500)}
            篇博客。
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
}
