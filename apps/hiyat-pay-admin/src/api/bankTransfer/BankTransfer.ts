export type BankTransfer = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  receiverBank: string | null;
  senderBank: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
