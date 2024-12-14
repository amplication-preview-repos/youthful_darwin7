import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UserProfileWhereInput = {
  bio?: StringNullableFilter;
  comments?: StringNullableFilter;
  coverPhoto?: JsonFilter;
  dateOfBirth?: DateTimeNullableFilter;
  educationLevel?: "Option1";
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
  relationshipStatus?: "Option1";
  tagName?: StringNullableFilter;
  userEducationLevel?: "Option1";
  userEmojiSettings?: "Option1";
  userProfilePrivacy?: "Option1";
  userRelationshipStatus?: "Option1";
  username?: StringNullableFilter;
};
