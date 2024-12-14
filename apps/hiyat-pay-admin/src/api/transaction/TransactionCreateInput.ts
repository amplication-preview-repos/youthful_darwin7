import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  date?: Date | null;
  status?: "Option1" | null;
  transactionId?: string | null;
  user?: UserWhereUniqueInput | null;
};
