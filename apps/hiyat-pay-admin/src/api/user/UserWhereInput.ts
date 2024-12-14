import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FilterListRelationFilter } from "../filter/FilterListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  filters?: FilterListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  lastName?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringFilter;
};
