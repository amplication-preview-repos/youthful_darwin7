import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FreelanceCategoryWhereInput = {
  categoryName?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
};
