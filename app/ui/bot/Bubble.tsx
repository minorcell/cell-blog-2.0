"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

interface BubbleProps {
  message: string;
  sender: "user" | "bot";
}

const Bubble: React.FC<BubbleProps> = ({ message, sender }) => {
  const isUser = sender === "user";

  return (
    <div
      className={`animate-fadeIn flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-6`}
    >
      <div className="flex items-start relative">
        {!isUser && (
          <span className="border rounded-full w-10 h-10 text-xl flex items-center justify-center">
            🤖
          </span>
        )}
        <div className="px-4 max-w-4xl">
          <div
            className={`px-3 py-2 rounded-xl font-sans ${
              isUser ? "bg-gray-300" : " bg-blue-100"
            }`}
          >
            <ReactMarkdown
              rehypePlugins={[rehypeHighlight]}
              className="prose prose-zinc"
            >
              {message}
            </ReactMarkdown>
          </div>
        </div>
        {isUser && (
          <span className="border rounded-full w-10 h-10 text-xl flex items-center justify-center">
            😎
          </span>
        )}
      </div>
    </div>
  );
};

export default Bubble;
