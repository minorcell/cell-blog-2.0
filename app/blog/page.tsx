"use client";

import { useEffect, useState } from "react";
import { getBlogList } from "@/app/lib/data/blog";
import { BlogType } from "@/app/lib/type/type";
import BlogItem from "@/app/ui/blog/BlogItem";
import { ReactLenis } from "lenis/react";

export default function Blog() {
  const [blogList, setBlogList] = useState<BlogType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBlogList();
      setBlogList(res.data);
    };

    fetchData();
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: true }}>
      <div className="flex flex-wrap items-start justify-between w-full">
        {blogList.map((item: BlogType, index: number) => (
          <BlogItem key={index} blog={item} />
        ))}
      </div>
    </ReactLenis>
  );
}
