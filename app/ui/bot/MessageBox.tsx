"use client";
import React, { useState, useEffect } from "react";
import Bubble from "@/app/ui/bot/Bubble";

interface Message {
  sender: "user" | "bot";
  message: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", message: "你好！有什么我可以帮助的吗？" },
    { sender: "user", message: "我需要一些帮助。" },
    { sender: "bot", message: "好的，告诉我你的问题吧！" },
    { sender: "user", message: "讲一下农夫与蛇的故事" },
    {
      sender: "bot",
      message:
        "《农夫与蛇》是一个寓言故事，讲述了一个农夫和一条蛇的遭遇，传递了“恩将仇报”的道理。故事大致是这样的：一天，农夫在雪地里发现了一条冰冻的蛇。看到它奄奄一息，农夫心生怜悯，于是把蛇捧起来，放在自己的怀里温暖它，帮助它恢复体力。蛇终于复活，重新获得了活力后，突然咬伤了农夫。农夫感到非常愤怒和痛苦，问蛇为什么要这样做。蛇冷笑着回应：“你竟然想救我，结果却遭到报复，这就是我的本性。”故事的寓意是：善待别人并不意味着对方会感激和回报，有时候反而会受到伤害。这个故事提醒人们在帮助别人时要小心谨慎，特别是面对那些本性不善或充满恶意的人。这个故事也常常被用来警示人们，不要轻易信任或救助那些可能会带来伤害的人或事物。",
    },
    {
      sender: "user",
      message:
        "故事的寓意是：善待别人并不意味着对方会感激和回报，有时候反而会受到伤害。这个故事提醒人们在帮助别人时要小心谨慎，特别是面对那些本性不善或充满恶意的人。",
    },
    {
      sender: "bot",
      message:
        "好的，我明白了。你可以问我其他问题，或者告诉我你需要帮助的具体问题。",
    },
    { sender: "user", message: "谢谢你的帮助！" },
    { sender: "bot", message: "不客气！" },
    { sender: "user", message: "再见！" },
    { sender: "bot", message: "再见！" },
    { sender: "user", message: "互相好！" },
    { sender: "bot", message: "互相好！" },
    { sender: "user", message: "别学我说话！" },
    {
      sender: "bot",
      message:
        "好的，我不会学你说话了。故事的寓意是：善待别人并不意味着对方会感激和回报，有时候反而会受到伤害。这个故事提醒人们在帮助别人时要小心谨慎，特别是面对那些本性不善或充满恶意的人。",
    },
  ]);

  useEffect(() => {
    setMessages(messages);
  }, []);

  return (
    <div className="w-full p-6 bg-gray-50 rounded-xl pb-20">
      {messages.map((msg, index) => (
        <Bubble key={index} sender={msg.sender} message={msg.message} />
      ))}
    </div>
  );
};

export default Chat;
