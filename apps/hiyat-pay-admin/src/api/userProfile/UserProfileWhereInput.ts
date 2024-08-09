import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserProfileWhereInput = {
  bio?: StringNullableFilter;
  coverPhoto?: JsonFilter;
  id?: StringFilter;
  profilePicture?: JsonFilter;
  username?: StringNullableFilter;
};
