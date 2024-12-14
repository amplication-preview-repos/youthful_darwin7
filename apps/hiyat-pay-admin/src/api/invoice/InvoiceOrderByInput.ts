import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  dateIssued?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  invoiceNumber?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
