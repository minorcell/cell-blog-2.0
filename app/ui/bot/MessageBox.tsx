import Bubble from "@/app/ui/bot/Bubble";
import { MessageType } from "@/app/lib/type/type";

interface ChatProps {
  messages: MessageType[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <div className="select-text w-full p-6 bg-gray-50 rounded-xl pb-36">
      {messages.map((msg: MessageType, index: number) => (
        <Bubble key={index} sender={msg.sender} message={msg.message} />
      ))}
      <h3 className="text-gray-400 text-xs text-center">
        🛡️ 为保证用户信息安全，对话内容仅保存在浏览器本地。
      </h3>
    </div>
  );
};

export default Chat;
