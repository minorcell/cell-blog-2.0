"use client";

import React from "react";
import { Bot } from "lucide-react";

interface BubbleProps {
  message: string;
  sender: "user" | "bot";
}

const Bubble: React.FC<BubbleProps> = ({ message, sender }) => {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div className="flex items-start relative">
        {!isUser && (
          <Bot className=" text-global border rounded-full p-2 w-10 h-10" />
        )}
        <div className="px-4 max-w-4xl">
          <p
            className={`px-4 py-2 rounded-xl ${
              isUser ? "bg-blue-100" : "bg-gray-200"
            }`}
          >
            {message}
          </p>
          {/* {!isUser && (
            <Copy className="text-global p-1 mt-1 absolute right-4 cursor-pointer" />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Bubble;
