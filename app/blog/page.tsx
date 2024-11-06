"use client";
import { useEffect, useState } from "react";
import { getBlogList } from "@/app/lib/data/blog";
import { BlogType } from "@/app/lib/type/type";
import BlogItem from "@/app/ui/blog/BlogItem";

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
    <div className="flex animate-fadeIn flex-wrap items-center justify-between w-full h-full overflow-y-auto pr-8">
      {blogList.map((item: BlogType, index: number) => (
        <BlogItem key={index} blog={item} />
      ))}
    </div>
  );
}
