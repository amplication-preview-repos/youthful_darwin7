import { User } from "../user/User";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Option1" | null;
  transactionId: string | null;
  updatedAt: Date;
  user?: User | null;
};
