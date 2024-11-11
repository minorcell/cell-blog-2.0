"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Bubble from "@/app/ui/bot/Bubble";
import useStore from "@/app/store/useStore";

import { chatBotServer } from "@/app/lib/data/bot";

import { Minimize } from "lucide-react";

export default function BotCell() {
  const [isSpeech, setIsSpeech] = useState(false);
  const recognitionRef = useRef({});
  const [context, setContext] = useState("");
  const [messages, setMessages] = useState([]);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const scrollRef = useRef(null);

  const globalIsLogin = useStore((state) => state.globalIsLogin);

  const pathname = usePathname();
  const startRecognition = () => {
    if (!globalIsLogin) {
      return alert("请先登录");
    }

    if (isSpeech || isSending) {
      return;
    } else {
      setShowMessageBox(true);
      recognitionRef.current.start();
      setIsSpeech(true);
    }
  };

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

  async function sendMessage(transcript) {
    try {
      setIsSending(true);
      const { data } = await chatBotServer({ content: transcript });
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "bot", text: data },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "bot", text: "网络错误" },
      ]);
    } finally {
      setContext("");
      setIsSending(false);
    }
  }

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setContext("当前浏览器不支持语音识别");
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = "zh-CN";
    recognitionRef.current.interimResults = true;
    recognitionRef.current.status = 0;

    recognitionRef.current.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");

      setContext(transcript);
      recognitionRef.current.status = 1;

      if (event.results[event.resultIndex].isFinal) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "user", text: transcript },
        ]);
        setIsSpeech(false);
        sendMessage(transcript);
      }
    };

    recognitionRef.current.onerror = () => {
      setContext("语音识别错误");
    };
  }, []);

  return pathname === "/bot" ? (
    <></>
  ) : (
    <>
      {showMessageBox && (
        <div
          ref={scrollRef}
          className="animate-fadeIn fixed bottom-4 right-4 w-[35vw] h-[75vh] rounded-2xl flex flex-col items-start p-4 bg-white shadow-lg border border-gray-300 overflow-y-auto pr-4 pb-20"
        >
          <Minimize
            className="duration-500 fixed cursor-pointer hover:text-red-500"
            onClick={() => {
              setShowMessageBox(false);
              setIsSpeech(false);
              recognitionRef.current.stop();
            }}
          />
          {messages.map((message, index) => (
            <Bubble
              key={index}
              message={message.text}
              sender={message.role}
              showAvatat={true}
            />
          ))}
          <h3 className="mx-auto text-gray-400 text-xs text-center select-none mt-4">
            🛡️ 全局 BotCell 聊天信息不做存储，关闭APP或刷新页面及清空记录。
          </h3>
        </div>
      )}
      <div
        onClick={() => {
          startRecognition();
        }}
        className={`animate-fadeIn fixed bottom-4 right-4 h-15 rounded-2xl flex items-center justify-center cursor-pointer ${
          isSpeech || isSending ? "w-[35vw] border bg-white" : ""
        }`}
      >
        <input
          type="text"
          readOnly
          value={context}
          placeholder="BotCell 正在聆听👻中..."
          className={`ml-4 w-full text-xl text-gray bg-transparent border-none duration-1000 active:outline-none focus:outline-none outline-none ${
            isSpeech || isSending ? "block" : "hidden"
          }`}
        />
        <Image
          src={"/BotCell.gif"}
          width={80}
          height={80}
          alt="BotCell"
          className={`${
            isSpeech || isSending ? "animate-botSpeech" : "animate-rotateSlowly"
          }`}
        />
      </div>
    </>
  );
}
