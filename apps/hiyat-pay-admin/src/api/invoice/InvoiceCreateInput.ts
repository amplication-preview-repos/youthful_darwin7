import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvoiceCreateInput = {
  amount?: number | null;
  dateIssued?: Date | null;
  dueDate?: Date | null;
  invoiceNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
