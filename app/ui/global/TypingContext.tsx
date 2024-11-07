"use client";
import useTyping from "@/app/hooks/useTyping";

export default function TypingContext() {
  return (
    <h1 className="duration-500 text-6xl font-bold text-global">
      欢{useTyping("迎来到 mCell 的工作台", 200, 5000)}
    </h1>
  );
}
