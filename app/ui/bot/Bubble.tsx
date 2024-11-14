"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

interface BubbleProps {
  message: string;
  sender: "user" | "bot";
  showAvatat?: true;
}

const bubbleVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const Bubble: React.FC<BubbleProps> = ({ message, sender, showAvatat }) => {
  const isUser = sender === "user";

  return (
    <motion.div
      className={`w-full flex ${isUser ? "justify-end" : "justify-start"} mb-6`}
      initial="hidden"
      animate="visible"
      variants={bubbleVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-start relative">
        {!isUser && !showAvatat && (
          <span className="border rounded-full w-10 h-10 text-xl flex items-center justify-center select-none bg-global">
            🤖
          </span>
        )}
        <div className="px-4">
          <motion.div
            className={`px-3 py-2 rounded-xl font-sans shadow-md ${
              isUser ? "bg-slate-300" : "bg-blue-100"
            }`}
            variants={bubbleVariants}
          >
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {message}
            </ReactMarkdown>
          </motion.div>
        </div>
        {isUser && !showAvatat && (
          <span className="border rounded-full w-10 h-10 text-xl flex items-center justify-center select-none bg-global">
            👻
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default Bubble;
