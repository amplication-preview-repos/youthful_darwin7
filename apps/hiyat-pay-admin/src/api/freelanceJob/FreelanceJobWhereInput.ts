import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FreelanceJobWhereInput = {
  category?: StringNullableFilter;
  id?: StringFilter;
  isBlocked?: BooleanNullableFilter;
  jobDescription?: StringNullableFilter;
  jobTitle?: StringNullableFilter;
  paymentMethod?: "Option1";
  postedDate?: DateTimeNullableFilter;
  user?: StringNullableFilter;
};
