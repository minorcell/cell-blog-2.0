"use client";

import { useEffect, useState } from "react";
import { getBlogList } from "@/app/lib/data/blog";
import { BlogType, BlogDataProps } from "@/app/lib/type/type";
import BlogItem from "@/app/ui/blog/BlogItem";
import BlogData from "@/app/ui/blog/BlogData";
import { Reorder } from "framer-motion";

export default function Blog() {
  const [blogList, setBlogList] = useState<BlogType[]>([]);
  const [blogData, setBlogData] = useState<BlogDataProps>({ total: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBlogList();
      setBlogList(res.data);
      setBlogData({ total: res.data.length });
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start overflow-y-auto pt-24">
      <div className="w-2/5 mb-12">
        <BlogData total={blogData.total} />
      </div>
      <Reorder.Group
        axis="y"
        onReorder={setBlogList}
        values={blogList}
        className="w-3/5 flex-col items-center"
      >
        {blogList.map((item: BlogType, index: number) => (
          <Reorder.Item key={index} value={item}>
            <BlogItem blog={item} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}
