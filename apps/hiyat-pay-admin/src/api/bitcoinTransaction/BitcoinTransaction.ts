export type BitcoinTransaction = {
  bitcoinAmount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  transactionType?: "Option1" | null;
  updatedAt: Date;
  user: string | null;
};
