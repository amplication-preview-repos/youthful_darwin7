import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  transactionId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
