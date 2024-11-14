"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BlogType } from "@/app/lib/type/type";
import { getBlogDetail } from "@/app/lib/data/blog";
import { formatTimestamp } from "@/app/utils/tool";
import { motion, useScroll, useSpring } from "framer-motion";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

type IdType = {
  id: string;
};

export default function BlogDetailPage() {
  const params = useParams();
  const { id } = params as IdType;
  const [blog, setBlog] = useState<BlogType>();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  async function fetchData() {
    const res = await getBlogDetail(id);
    setBlog(res.data);
  }

  useEffect(() => {
    fetchData();
  }, [params]);

  useEffect(() => {
    hljs.highlightAll();
  }, [blog]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-global"
        style={{ scaleX }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full h-full flex flex-col items-center justify-start pt-24"
      >
        <div className="w-full mb-12 flex flex-col items-center justify-between">
          <motion.h1 className="text-4xl font-bold border-none">
            {blog?.title}
          </motion.h1>
          <div className="text-base mt-4 shadow-xl flex items-center justify-center">
            <span className="px-3 py-1 bg-red-500 rounded-l-xl text-white">
              {blog?.type}
            </span>
            <span className="px-3 py-1 bg-yellow-500 text-white">
              {blog?.looks} 阅读
            </span>
            <span className="px-3 py-1 bg-blue-500 text-white">
              {blog?.update_time && formatTimestamp(blog?.update_time)}
            </span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-r-xl">
              {blog?.content.length}字符
            </span>
          </div>
        </div>
        <div className="w-1/2">
          {blog?.content && (
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          )}
        </div>
      </motion.div>
    </>
  );
}
