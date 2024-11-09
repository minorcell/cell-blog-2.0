import Bubble from "@/app/ui/bot/Bubble";
import { MessageType } from "@/app/lib/type/type";

interface ChatProps {
  messages: MessageType[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <div className="select-text w-full px-6 rounded-b-xl py-24 bg-slate-100">
      {messages.map((msg: MessageType, index: number) => (
        <Bubble key={index} sender={msg.sender} message={msg.message} />
      ))}
      <h3 className="text-gray-400 text-xs text-center select-none">
        🛡️ 为保证用户信息安全，对话内容仅保存在浏览器本地。
      </h3>
    </div>
  );
};

export default Chat;
