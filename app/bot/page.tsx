"use client";

import { useEffect, useState } from "react";
import { Send, Trash } from "lucide-react";
import MessageBox from "@/app/ui/bot/MessageBox";
import { chatBotServer } from "@/app/lib/data/bot";
import { MessageType } from "@/app/lib/type/type";

export default function BotPage() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [content, setContent] = useState<string>("");

  async function chatBot() {
    setContent("");
    setMessages([...messages, { sender: "user", message: content }]);
    const { data } = await chatBotServer({ content });
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", message: data },
    ]);
  }

  useEffect(() => {
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages && storedMessages !== "[]") {
      setMessages(JSON.parse(storedMessages));
    } else if (!storedMessages || storedMessages === "[]") {
      setMessages([
        {
          sender: "bot",
          message:
            "你好呀🥰，我是botCell，mCell工作台的专属Bot，快来和我对话吧！🎉🎉🎉",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="mx-auto w-3/5 absolute bottom-2 bg-gray-50 z-40 rounded-xl">
        <div className="relative flex items-center rounded-xl border">
          <Trash
            onClick={() => setMessages([])}
            className={`duration-500 h-8 w-8 p-2 ml-2 rounded-xl text-white ${
              messages.length > 0
                ? "bg-global cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          />
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter" && content) {
                chatBot();
              }
            }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder="输入消息和Bot对话吧~"
            className="w-full ml-4 mr-12 py-2.5 bg-gray-50 focus:outline-none"
          />
          <div className="absolute right-2 flex items-center gap-1">
            <button
              onClick={() => chatBot()}
              className="duration-500 h-8 w-8 bg-global hover:bg-opacity-50 text-white rounded-xl flex items-center justify-center disabled:bg-gray-300"
              disabled={!content}
            >
              <Send className="h-5 w-5 -rotate-90" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full overflow-y-auto">
        <MessageBox messages={messages} />
      </div>
    </div>
  );
}
