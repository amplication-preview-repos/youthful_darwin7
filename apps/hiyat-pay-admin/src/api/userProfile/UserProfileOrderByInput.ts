import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  bio?: SortOrder;
  comments?: SortOrder;
  coverPhoto?: SortOrder;
  createdAt?: SortOrder;
  emojiSettings?: SortOrder;
  heartColor?: SortOrder;
  heartEmojiColor?: SortOrder;
  id?: SortOrder;
  isBlocked?: SortOrder;
  isSpam?: SortOrder;
  likes?: SortOrder;
  messageRequests?: SortOrder;
  privacy?: SortOrder;
  profilePicture?: SortOrder;
  profilePrivacy?: SortOrder;
  tagName?: SortOrder;
  updatedAt?: SortOrder;
  userEmojiSettings?: SortOrder;
  username?: SortOrder;
};
