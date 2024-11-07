"use client";

import React, { useState } from "react";

import { Paperclip, ArrowUp } from "lucide-react";

export default function Component() {
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="mx-auto w-3/5 absolute bottom-2 bg-gray-50 z-40 rounded-xl">
      <div className="relative flex items-center rounded-xl border">
        <label className="absolute left-2 cursor-pointer">
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*,.pdf,.doc,.docx"
          />
          <Paperclip className={`h-5 w-5 ${file ? "text-global" : ""}`} />
        </label>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="输入消息和Bot对话吧~"
          className="w-full ml-10 mr-12 py-2.5 bg-gray-50 focus:outline-none"
        />
        <div className="absolute right-2 flex items-center gap-1">
          <button
            className="duration-500 h-8 w-8 bg-global hover:bg-opacity-50 text-white rounded-full flex items-center justify-center disabled:bg-gray-300"
            disabled={!input}
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
