import { BankTransferWhereInput } from "./BankTransferWhereInput";
import { BankTransferOrderByInput } from "./BankTransferOrderByInput";

export type BankTransferFindManyArgs = {
  where?: BankTransferWhereInput;
  orderBy?: Array<BankTransferOrderByInput>;
  skip?: number;
  take?: number;
};
