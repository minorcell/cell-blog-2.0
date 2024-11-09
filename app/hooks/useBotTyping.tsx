"use client";

import { useState, useEffect } from "react";

const useTyping = (text: string, typingSpeed: number = 100): string => {
  const [typedText, setTypedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const typeCharacter = () => {
      setIndex((prevIndex) => {
        if (prevIndex < text.length) {
          return prevIndex + 1;
        }
        return prevIndex;
      });
    };

    if (isTyping) {
      timer = setTimeout(() => {
        typeCharacter();
      }, typingSpeed);
    }

    if (index >= text.length) {
      setIsTyping(false);
    }

    setTypedText(text.slice(0, index));

    return () => clearTimeout(timer);
  }, [index, isTyping, text, typingSpeed]);

  return typedText;
};

export default useTyping;