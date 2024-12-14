import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SavingsAccountWhereInput = {
  balance?: FloatNullableFilter;
  dateOpened?: DateTimeNullableFilter;
  id?: StringFilter;
  rainyDayFund?: FloatNullableFilter;
  user?: StringNullableFilter;
};
