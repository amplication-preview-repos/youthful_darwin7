import { Filter } from "../filter/Filter";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  filters?: Array<Filter>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
