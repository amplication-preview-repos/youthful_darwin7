import { Filter } from "../filter/Filter";
import { Invoice } from "../invoice/Invoice";
import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";

export type User = {
  createdAt: Date;
  email: string | null;
  filters?: Array<Filter>;
  firstName: string | null;
  id: string;
  invoices?: Array<Invoice>;
  lastName: string | null;
  roles: JsonValue;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
};
