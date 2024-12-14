import { FilterUpdateManyWithoutUsersInput } from "./FilterUpdateManyWithoutUsersInput";
import { InvoiceUpdateManyWithoutUsersInput } from "./InvoiceUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  filters?: FilterUpdateManyWithoutUsersInput;
  firstName?: string | null;
  invoices?: InvoiceUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  username?: string;
};
