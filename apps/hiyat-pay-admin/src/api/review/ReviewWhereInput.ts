import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  postedDate?: DateTimeNullableFilter;
  rating?: IntNullableFilter;
  user?: StringNullableFilter;
};
