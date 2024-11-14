export type BlogType = {
  title: string;
  id: number;
  type: string;
  looks: number;
  cover: string;
  intro: string;
  update_time: Date;
  content: string;
};

export type BlogDataProps = {
  total: number;
};

export type BotChatType = {
  content: string;
};

export type MessageType = {
  sender: "user" | "bot";
  message: string;
};

export type UserLogin = {
  name: string;
  password: string;
};
