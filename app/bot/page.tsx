"use client";

import { useEffect, useState, useRef } from "react";
import { Send, Trash, LoaderCircle } from "lucide-react";
import MessageBox from "@/app/ui/bot/MessageBox";
import { chatBotServer } from "@/app/lib/data/bot";
import { MessageType } from "@/app/lib/type/type";
import { getMessages, addMessage, clearMessages } from "@/app/lib/indexdDB";

export default function BotPage() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [content, setContent] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function chatBot() {
    setIsLoading(true);
    setContent("");
    const userMessage: MessageType = { sender: "user", message: content };
    setMessages([...messages, userMessage]);
    await addMessage(userMessage);
    const { data } = await chatBotServer({ content });
    const botMessage: MessageType = { sender: "bot", message: data };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    await addMessage(botMessage);
    setIsLoading(false);
  }

  useEffect(() => {
    async function fetchMessages() {
      try {
        const storedMessages = await getMessages();
        if (storedMessages.length > 0) {
          setMessages(storedMessages);
        } else {
          setMessages([
            {
              sender: "bot",
              message:
                "你好呀🥰，我是BotCell，mCell工作台的专属Bot，快来和我对话吧！🎉🎉🎉",
            },
          ]);
          await addMessage({
            sender: "bot",
            message:
              "你好呀🥰，我是BotCell，mCell工作台的专属Bot，快来和我对话吧！🎉🎉🎉",
          });
        }
      } catch (error) {
        console.error("Failed to fetch messages from IndexedDB", error);
      }
    }

    fetchMessages();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollHeight = scrollRef.current.scrollHeight;
      const height = scrollRef.current.clientHeight;
      scrollRef.current.scrollTo({
        top: scrollHeight - height,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="mx-auto w-3/5 absolute bottom-4 z-40 rounded-xl">
        <div className="fixed w-2/5 left-1/2 bg-gray-50 -translate-x-1/2 bottom-4 flex items-center rounded-xl border shadow-xl">
          <Trash
            onClick={async () => {
              if (!isLoading) {
                await clearMessages();
                setMessages([]);
              }
            }}
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
            disabled={isLoading}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder={
              isLoading ? "CellBot正在思考中..." : "输入消息和 BotCell 对话吧~"
            }
            className="w-full ml-4 mr-12 py-2.5 bg-gray-50 focus:outline-none"
          />
          <div className="absolute right-2 flex items-center gap-1">
            <button
              onClick={() => chatBot()}
              className="duration-500 h-8 w-8 bg-global hover:bg-opacity-50 text-white rounded-xl flex items-center justify-center disabled:bg-gray-300"
              disabled={!content}
            >
              {isLoading ? (
                <LoaderCircle className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5 -rotate-90" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full overflow-y-auto" ref={scrollRef}>
        <MessageBox messages={messages} />
      </div>
    </div>
  );
}
