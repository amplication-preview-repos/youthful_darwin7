import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UserProfileWhereInput = {
  bio?: StringNullableFilter;
  comments?: StringNullableFilter;
  coverPhoto?: JsonFilter;
  emojiSettings?: "Option1";
  heartColor?: "Option1";
  heartEmojiColor?: "Option1";
  id?: StringFilter;
  isBlocked?: BooleanNullableFilter;
  isSpam?: BooleanNullableFilter;
  likes?: IntNullableFilter;
  messageRequests?: BooleanNullableFilter;
  privacy?: "Option1";
  profilePicture?: JsonFilter;
  profilePrivacy?: "Option1";
  tagName?: StringNullableFilter;
  userEmojiSettings?: "Option1";
  username?: StringNullableFilter;
};
