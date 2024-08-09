export type BitcoinTransactionUpdateInput = {
  bitcoinAmount?: number | null;
  date?: Date | null;
  transactionType?: "Option1" | null;
  user?: string | null;
};
