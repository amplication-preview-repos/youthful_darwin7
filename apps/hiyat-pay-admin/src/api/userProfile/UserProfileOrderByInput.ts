import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  bio?: SortOrder;
  comments?: SortOrder;
  coverPhoto?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  educationLevel?: SortOrder;
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
  relationshipStatus?: SortOrder;
  tagName?: SortOrder;
  updatedAt?: SortOrder;
  userEducationLevel?: SortOrder;
  userEmojiSettings?: SortOrder;
  userProfilePrivacy?: SortOrder;
  userRelationshipStatus?: SortOrder;
  username?: SortOrder;
};
