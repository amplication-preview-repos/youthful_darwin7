import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BitcoinTransactionWhereInput = {
  bitcoinAmount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  transactionType?: "Option1";
  user?: StringNullableFilter;
};
