import { SortOrder } from "../../util/SortOrder";

export type BitcoinTransactionOrderByInput = {
  bitcoinAmount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
