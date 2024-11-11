"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

import { usePathname } from "next/navigation";
import Bubble from "@/app/ui/bot/Bubble";
import useStore from "@/app/store/useStore";

import { chatBotServer } from "@/app/lib/data/bot";

import { Minimize } from "lucide-react";

const messageBoxVariants = {
  hidden: { opacity: 0, scale: 0.9, x: 100, y: 50 },
  visible: { opacity: 1, scale: 1, x: 0, y: 0 },
  exit: { opacity: 0, scale: 0.9, x: 100, y: 50 },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.5, y: 30 },
};

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
      return toast.warn("👻请登录之后在使用BotCell！", {
        icon: false,
        closeOnClick: true,
        pauseOnHover: false,
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
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
    } catch {
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
      setIsSpeech(false);
    };
  }, []);

  return pathname === "/bot" ? (
    <></>
  ) : (
    <>
      <AnimatePresence>
        {showMessageBox && (
          <motion.div
            ref={scrollRef}
            className="fixed bottom-4 right-4 w-[40vw] h-[75vh] rounded-2xl flex flex-col items-start p-4 bg-white shadow-lg border border-gray-300 overflow-y-auto pr-4 pb-24"
            variants={messageBoxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Minimize
              className="duration-500 fixed cursor-pointer -translate-x-2 -translate-y-2 z-10 hover:text-red-500"
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
                showAvatar={true}
              />
            ))}
            <motion.h3
              className="mx-auto text-gray-400 text-xs text-center select-none mt-4"
              variants={buttonVariants}
            >
              🛡️ 全局 BotCell 聊天信息不做存储，关闭APP或刷新页面即清空记录。
            </motion.h3>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          onClick={startRecognition}
          className={`fixed bottom-4 right-4 h-15 rounded-2xl flex items-center justify-center cursor-pointer ${
            isSpeech || isSending ? "w-[40vw] border bg-white" : ""
          }`}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <input
            type="text"
            readOnly
            value={context}
            placeholder="BotCell 正在聆听👻中..."
            className={`ml-4 w-full text-2xl text-gray-500 bg-transparent border-none duration-1000 active:outline-none focus:outline-none outline-none ${
              isSpeech || isSending ? "block" : "hidden"
            }`}
          />
          <Image
            src={"/BotCell.gif"}
            width={80}
            height={80}
            alt="BotCell"
            className={`${
              isSpeech || isSending
                ? "animate-botSpeech"
                : "animate-rotateSlowly"
            }`}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
