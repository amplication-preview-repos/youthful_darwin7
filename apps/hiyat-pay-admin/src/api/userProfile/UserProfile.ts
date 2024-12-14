import { JsonValue } from "type-fest";

export type UserProfile = {
  bio: string | null;
  comments: string | null;
  coverPhoto: JsonValue;
  createdAt: Date;
  dateOfBirth: Date | null;
  educationLevel?: "Option1" | null;
  emojiSettings?: "Option1" | null;
  heartColor?: "Option1" | null;
  heartEmojiColor?: "Option1" | null;
  id: string;
  isBlocked: boolean | null;
  isSpam: boolean | null;
  likes: number | null;
  messageRequests: boolean | null;
  privacy?: "Option1" | null;
  profilePicture: JsonValue;
  profilePrivacy?: "Option1" | null;
  relationshipStatus?: "Option1" | null;
  tagName: string | null;
  updatedAt: Date;
  userEducationLevel?: "Option1" | null;
  userEmojiSettings?: "Option1" | null;
  userProfilePrivacy?: "Option1" | null;
  userRelationshipStatus?: "Option1" | null;
  username: string | null;
};
