import { BitcoinTransactionWhereInput } from "./BitcoinTransactionWhereInput";
import { BitcoinTransactionOrderByInput } from "./BitcoinTransactionOrderByInput";

export type BitcoinTransactionFindManyArgs = {
  where?: BitcoinTransactionWhereInput;
  orderBy?: Array<BitcoinTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
