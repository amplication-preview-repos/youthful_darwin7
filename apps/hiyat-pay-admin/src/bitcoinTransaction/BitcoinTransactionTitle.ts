import { BitcoinTransaction as TBitcoinTransaction } from "../api/bitcoinTransaction/BitcoinTransaction";

export const BITCOINTRANSACTION_TITLE_FIELD = "user";

export const BitcoinTransactionTitle = (
  record: TBitcoinTransaction
): string => {
  return record.user?.toString() || String(record.id);
};
