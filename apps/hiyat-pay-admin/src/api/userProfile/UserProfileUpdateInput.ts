import { InputJsonValue } from "../../types";

export type UserProfileUpdateInput = {
  bio?: string | null;
  comments?: string | null;
  coverPhoto?: InputJsonValue;
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
  tagName?: string | null;
  userEmojiSettings?: "Option1" | null;
  username?: string | null;
};
