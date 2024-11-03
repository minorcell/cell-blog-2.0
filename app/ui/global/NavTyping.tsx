"use client";

import useTyping from "@/app/hooks/useTyping";

export default function NavTyping() {
  return (
    <div className="select-none w-full flex-1 flex flex-col justify-evenly items-center text-2xl p-4">
      <div className="text-3xl font-bold tracking-widest">mCell</div>
      {useTyping("随心，步履不停。", 250, 2500)}
    </div>
  );
}
