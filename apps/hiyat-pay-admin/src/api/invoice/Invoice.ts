import { User } from "../user/User";

export type Invoice = {
  amount: number | null;
  createdAt: Date;
  dateIssued: Date | null;
  dueDate: Date | null;
  id: string;
  invoiceNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
