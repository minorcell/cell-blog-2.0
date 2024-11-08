import request from "@/app/lib/api/request";
import { BotChatType } from "@/app/lib/type/type";
export async function chatBotServer(payload: BotChatType) {
  return request.post("/api/bot", payload);
}
