"use client";

import { useEffect, useState } from "react";
import { getBlogList } from "@/app/lib/data/blog";
import { BlogType, BlogDataProps } from "@/app/lib/type/type";
import BlogItem from "@/app/ui/blog/BlogItem";
import BlogData from "@/app/ui/blog/BlogData";

export default function Blog() {
  const [blogList, setBlogList] = useState<BlogType[]>([]);
  const [blogData, setBlogData] = useState<BlogDataProps>({
    total: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBlogList();
      for (let i = 0; i < 10; i++) {
        res.data.push(res.data[0]);
      }
      setBlogList(res.data);
      setBlogData({
        total: res.data.length,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start overflow-y-auto pt-24">
      <div className="w-2/5 mb-12">
        <BlogData total={blogData.total} />
      </div>
      {blogList.map((item: BlogType, index: number) => (
        <BlogItem key={index} blog={item} />
      ))}
    </div>
  );
}
