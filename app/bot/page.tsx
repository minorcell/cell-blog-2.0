"use client";

import UserInput from "@/app/ui/bot/UserInput";
import MessageBox from "@/app/ui/bot/MessageBox";

export default function BotPage() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <UserInput />
      <div className="w-full h-full overflow-y-auto">
        <MessageBox />
      </div>
    </div>
  );
}
