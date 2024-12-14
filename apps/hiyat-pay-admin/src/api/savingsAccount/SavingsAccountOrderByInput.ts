import { SortOrder } from "../../util/SortOrder";

export type SavingsAccountOrderByInput = {
  balance?: SortOrder;
  createdAt?: SortOrder;
  dateOpened?: SortOrder;
  id?: SortOrder;
  rainyDayFund?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
