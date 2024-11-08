import Bubble from "@/app/ui/bot/Bubble";
import { MessageType } from "@/app/lib/type/type";

interface ChatProps {
  messages: MessageType[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <div className="w-full p-6 bg-gray-50 rounded-xl pb-20">
      {messages.map((msg: MessageType, index: number) => (
        <Bubble key={index} sender={msg.sender} message={msg.message} />
      ))}
    </div>
  );
};

export default Chat;
