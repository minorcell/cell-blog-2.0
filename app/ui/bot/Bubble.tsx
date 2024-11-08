"use client";

import React from "react";
import useBotTyping from "@/app/hooks/useBotTyping";

interface BubbleProps {
  message: string;
  sender: "user" | "bot";
}

const Bubble: React.FC<BubbleProps> = ({ message, sender }) => {
  const isUser = sender === "user";
  const botTypingMessage = useBotTyping(message, 10);

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div className="flex items-start relative">
        {!isUser && (
          <span className="border rounded-full w-10 h-10 text-xl flex items-center justify-center">
            🤖
          </span>
        )}
        <div className="px-4 max-w-4xl">
          <p
            className={`px-4 py-2 rounded-xl leading-6 tracking-widest font-sans ${
              isUser ? "bg-blue-100" : "bg-gray-200"
            }`}
          >
            {isUser ? message : botTypingMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bubble;
