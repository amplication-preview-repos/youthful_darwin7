import { InputJsonValue } from "../../types";

export type UserProfileCreateInput = {
  bio?: string | null;
  coverPhoto?: InputJsonValue;
  profilePicture?: InputJsonValue;
  tagName?: string | null;
  username?: string | null;
};
