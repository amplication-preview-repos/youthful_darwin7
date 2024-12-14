import { FilterCreateNestedManyWithoutUsersInput } from "./FilterCreateNestedManyWithoutUsersInput";
import { InvoiceCreateNestedManyWithoutUsersInput } from "./InvoiceCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  filters?: FilterCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  invoices?: InvoiceCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
};
