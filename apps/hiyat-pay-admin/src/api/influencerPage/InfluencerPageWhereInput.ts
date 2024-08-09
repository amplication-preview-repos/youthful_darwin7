import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InfluencerPageWhereInput = {
  contentUrl?: JsonFilter;
  description?: StringNullableFilter;
  followers?: IntNullableFilter;
  gifts?: IntNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
  title?: StringNullableFilter;
};
