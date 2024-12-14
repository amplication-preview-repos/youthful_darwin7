import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvoiceWhereInput = {
  amount?: FloatNullableFilter;
  dateIssued?: DateTimeNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  invoiceNumber?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
