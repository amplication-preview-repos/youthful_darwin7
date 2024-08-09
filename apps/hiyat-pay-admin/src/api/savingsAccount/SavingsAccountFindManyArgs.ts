import { SavingsAccountWhereInput } from "./SavingsAccountWhereInput";
import { SavingsAccountOrderByInput } from "./SavingsAccountOrderByInput";

export type SavingsAccountFindManyArgs = {
  where?: SavingsAccountWhereInput;
  orderBy?: Array<SavingsAccountOrderByInput>;
  skip?: number;
  take?: number;
};
