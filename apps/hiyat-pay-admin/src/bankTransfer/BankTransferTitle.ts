import { BankTransfer as TBankTransfer } from "../api/bankTransfer/BankTransfer";

export const BANKTRANSFER_TITLE_FIELD = "receiverBank";

export const BankTransferTitle = (record: TBankTransfer): string => {
  return record.receiverBank?.toString() || String(record.id);
};
