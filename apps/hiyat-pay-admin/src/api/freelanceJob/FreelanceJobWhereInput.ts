import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FreelanceJobWhereInput = {
  category?: StringNullableFilter;
  id?: StringFilter;
  jobDescription?: StringNullableFilter;
  jobTitle?: StringNullableFilter;
  paymentMethod?: "Option1";
  postedDate?: DateTimeNullableFilter;
  user?: StringNullableFilter;
};
