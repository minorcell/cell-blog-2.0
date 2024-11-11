"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

interface BubbleProps {
  message: string;
  sender: "user" | "bot";
  showAvatat?: true;
}

const Bubble: React.FC<BubbleProps> = ({ message, sender, showAvatat }) => {
  const isUser = sender === "user";

  return (
    <div
      className={`w-full animate-fadeIn flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-6`}
    >
      <div className="flex items-start relative">
        {!isUser && !showAvatat && (
          <span className="border rounded-full w-10 h-10 text-xl flex items-center justify-center select-none bg-global">
            🤖
          </span>
        )}
        <div className="px-4">
          <div
            className={`px-3 py-2 rounded-xl font-sans shadow-md ${
              isUser ? "bg-slate-300" : " bg-blue-100"
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
        {isUser && !showAvatat && (
          <span className="border rounded-full w-10 h-10 text-xl flex items-center justify-center select-none bg-global">
            👻
          </span>
        )}
      </div>
    </div>
  );
};

export default Bubble;
