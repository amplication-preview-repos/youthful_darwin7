export type BankTransferCreateInput = {
  amount?: number | null;
  date?: Date | null;
  receiverBank?: string | null;
  senderBank?: string | null;
  status?: "Option1" | null;
};
