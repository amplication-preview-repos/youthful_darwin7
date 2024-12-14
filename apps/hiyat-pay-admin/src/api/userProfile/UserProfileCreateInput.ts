import { InputJsonValue } from "../../types";

export type UserProfileCreateInput = {
  bio?: string | null;
  comments?: string | null;
  coverPhoto?: InputJsonValue;
  dateOfBirth?: Date | null;
  educationLevel?: "Option1" | null;
  emojiSettings?: "Option1" | null;
  heartColor?: "Option1" | null;
  heartEmojiColor?: "Option1" | null;
  isBlocked?: boolean | null;
  isSpam?: boolean | null;
  likes?: number | null;
  messageRequests?: boolean | null;
  privacy?: "Option1" | null;
  profilePicture?: InputJsonValue;
  profilePrivacy?: "Option1" | null;
  relationshipStatus?: "Option1" | null;
  tagName?: string | null;
  userEducationLevel?: "Option1" | null;
  userEmojiSettings?: "Option1" | null;
  userProfilePrivacy?: "Option1" | null;
  userRelationshipStatus?: "Option1" | null;
  username?: string | null;
};
