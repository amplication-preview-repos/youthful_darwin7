import { SortOrder } from "../../util/SortOrder";

export type BankTransferOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  receiverBank?: SortOrder;
  senderBank?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
