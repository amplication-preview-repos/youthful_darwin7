export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  receiver: string | null;
  sender: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
