import { JsonValue } from "type-fest";

export type UserProfile = {
  bio: string | null;
  comments: string | null;
  coverPhoto: JsonValue;
  createdAt: Date;
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
  tagName: string | null;
  updatedAt: Date;
  userEmojiSettings?: "Option1" | null;
  username: string | null;
};
