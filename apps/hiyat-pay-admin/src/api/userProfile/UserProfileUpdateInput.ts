import { InputJsonValue } from "../../types";

export type UserProfileUpdateInput = {
  bio?: string | null;
  coverPhoto?: InputJsonValue;
  profilePicture?: InputJsonValue;
  tagName?: string | null;
  username?: string | null;
};
