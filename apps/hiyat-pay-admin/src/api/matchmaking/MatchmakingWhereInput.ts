import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type MatchmakingWhereInput = {
  age?: IntNullableFilter;
  city?: StringNullableFilter;
  educationLevel?: StringNullableFilter;
  eyeColor?: StringNullableFilter;
  height?: IntNullableFilter;
  id?: StringFilter;
  isBlocked?: BooleanNullableFilter;
  race?: StringNullableFilter;
  relationshipType?: "Option1";
  state?: StringNullableFilter;
  user?: StringNullableFilter;
  weight?: IntNullableFilter;
  zipCode?: StringNullableFilter;
};
