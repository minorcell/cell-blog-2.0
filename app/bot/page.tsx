"use client";

import { useEffect, useState, useRef } from "react";
import { Send, Trash2, LoaderCircle } from "lucide-react";
import MessageBox from "@/app/ui/bot/MessageBox";
import SpeechRecognitionComponent from "../ui/bot/Speech";
import { chatBotServer } from "@/app/lib/data/bot";
import { MessageType } from "@/app/lib/type/type";
import { getMessages, addMessage, clearMessages } from "@/app/lib/indexdDB";

export default function BotPage() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [content, setContent] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [start, setStart] = useState(false);
  const [finishSpeech, setFinishSpeech] = useState(false);

  async function chatBot() {
    if (!content) return;
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
    if (finishSpeech) {
      chatBot();
      setFinishSpeech(false);
    }
  }, [finishSpeech]);

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
                "- 你好呀🥰，我是BotCell，mCell工作台的专属Bot，快来和我对话吧！🎉🎉🎉",
            },
          ]);
          await addMessage({
            sender: "bot",
            message:
              "- 你好呀🥰，我是BotCell，mCell工作台的专属Bot，快来和我对话吧！🎉🎉🎉",
          });
        }
      } catch {
        setMessages([
          {
            sender: "bot",
            message:
              "- 你好呀🥰，我是BotCell，mCell工作台的专属Bot，快来和我对话吧！🎉🎉🎉",
          },
        ]);
        await addMessage({
          sender: "bot",
          message:
            "- 你好呀🥰，我是BotCell，mCell工作台的专属Bot，快来和我对话吧！🎉🎉🎉",
        });
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
        <div className="fixed w-1/2 h-14 left-1/2 bg-gray-50 -translate-x-1/2 bottom-4 flex items-center rounded-xl border shadow-xl">
          <button
            onClick={async () => {
              if (!isLoading) {
                await clearMessages();
                setMessages([
                  {
                    sender: "bot",
                    message:
                      "- 你好呀🥰，我是BotCell，mCell工作台的专属Bot，快来和我对话吧！🎉🎉🎉",
                  },
                ]);
              }
            }}
            className="duration-500 h-8 w-8 p-2 ml-2 rounded-xl text-white flex items-center justify-center hover:bg-red-500 bg-global cursor-pointer"
          >
            <Trash2 />
          </button>
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter" && content) {
                chatBot();
              }
            }}
            autoFocus
            disabled={isLoading}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder={
              start
                ? "BotCell 正在聆听🎙️你的对话..."
                : isLoading
                ? "BotCell 正在思考🤔中..."
                : "输入消息和 BotCell 对话💬吧~"
            }
            className="w-full ml-4 mr-24 py-2.5 bg-gray-50 focus:outline-none"
          />
          <div className="absolute right-2 flex items-center gap-2">
            <span className="text-gray-300">|</span>
            <SpeechRecognitionComponent
              start={start}
              setStart={setStart}
              setContext={setContent}
              setFinishSpeech={setFinishSpeech}
            />
            <button
              onClick={() => chatBot()}
              className={`duration-500 h-8 w-8 text-white rounded-xl flex items-center justify-center ${
                isLoading ? "animate-pulse cursor-not-allowed" : ""
              } ${
                content.length === 0
                  ? "cursor-not-allowed bg-gray-500"
                  : "bg-green-500"
              }`}
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
