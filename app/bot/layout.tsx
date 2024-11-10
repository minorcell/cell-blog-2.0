"use client";

import { useState } from "react";

import useStore from "@/app/store/useStore";

import Modal from "@/app/ui/cellComponents/Modal";
import LoginRegisterForm from "@/app/ui/global/LoginRegisterForm";
export default function BotLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(true);
  const globalIsLogin = useStore((state) => state.globalIsLogin);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="animate-fadeIn mx-auto w-3/5 h-screen flex items-center justify-center rounded-b-xl shadow-2xl border bg-slate-100">
      {globalIsLogin ? (
        children
      ) : (
        <>
          <div onClick={() => setIsOpen(true)}>
            <h1 className="text-3xl font-bold text-center mb-4">
              请先<span className="text-global">登录</span>或
              <span className="text-global">注册</span>
            </h1>
            <p className="text-center text-gray-500">
              为了保护您的信息安全，我们需要您先登录或注册才能使用本功能。
            </p>
          </div>
          <Modal isOpen={isOpen} onClose={onClose} showBottomButtons={false}>
            <LoginRegisterForm setIsOpen={setIsOpen} />
          </Modal>
        </>
      )}
    </div>
  );
}
