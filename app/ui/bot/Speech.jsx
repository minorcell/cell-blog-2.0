"use client";

import React, { useEffect, useRef, useState } from "react";
import { Mic, MicOff } from "lucide-react";

function SpeechRecognitionComponent({
  start,
  setStart,
  setContext,
  setFinishSpeech,
}) {
  const recognitionRef = useRef(null);
  const [isAbleToSpeak, setIsAbleToSpeak] = useState(false);
  const [isRecognitionAvailable, setIsRecognitionAvailable] = useState(true);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsRecognitionAvailable(false);
      return;
    }
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = "zh-CN";
    recognitionRef.current.interimResults = false;
    recognitionRef.current.maxAlternatives = 1;

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setContext(transcript);
      setFinishSpeech(true);
    };

    recognitionRef.current.onend = () => {
      setStart(false);
      setIsAbleToSpeak(false);
    };

    recognitionRef.current.onerror = () => {
      setStart(false);
      setIsAbleToSpeak(false);
    };
  }, [setContext, setStart]);

  useEffect(() => {
    if (start && recognitionRef.current) {
      setIsAbleToSpeak(true);
      recognitionRef.current.start();
    } else if (!start && recognitionRef.current) {
      recognitionRef.current.stop();
    }
  }, [start]);

  const handleButtonClick = () => {
    if (isAbleToSpeak) {
      recognitionRef.current.stop();
    }

    setStart(true);
  };

  return (
    <div className="text-center">
      <button
        onClick={handleButtonClick}
        className={`duration-500 h-8 w-8 ${
          isAbleToSpeak ? "bg-green-500 animate-pulse" : "bg-global"
        } hover:bg-green-500 text-white rounded-xl flex items-center 
          justify-center disabled:bg-gray-300`}
        disabled={!isRecognitionAvailable}
      >
        {isRecognitionAvailable ? (
          <Mic className="w-5 h-5" />
        ) : (
          <MicOff className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}

export default SpeechRecognitionComponent;
