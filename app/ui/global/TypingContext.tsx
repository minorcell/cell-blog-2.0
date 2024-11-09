"use client";
import useTyping from "@/app/hooks/useTyping";

export default function TypingContext() {
  return (
    <p className="duration-500 h-1/5 text-6xl font-bold text-global">
      🎉{useTyping("欢迎来到 mCell 的工作台", 100, 7500)} 🎉
    </p>
  );
}
