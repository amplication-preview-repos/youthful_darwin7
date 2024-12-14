export type P2PTransfer = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  receiver: string | null;
  sender: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
