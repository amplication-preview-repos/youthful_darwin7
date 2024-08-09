import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  status?: "Option1" | null;
  transactionId?: string | null;
  user?: UserWhereUniqueInput | null;
};
