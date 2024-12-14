import { P2PTransfer as TP2PTransfer } from "../api/p2PTransfer/P2PTransfer";

export const P2PTRANSFER_TITLE_FIELD = "receiver";

export const P2PTransferTitle = (record: TP2PTransfer): string => {
  return record.receiver?.toString() || String(record.id);
};
