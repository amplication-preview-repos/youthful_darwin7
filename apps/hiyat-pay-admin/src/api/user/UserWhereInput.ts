import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FilterListRelationFilter } from "../filter/FilterListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  filters?: FilterListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
