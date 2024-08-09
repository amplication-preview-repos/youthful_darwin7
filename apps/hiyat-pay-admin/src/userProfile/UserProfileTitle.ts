import { UserProfile as TUserProfile } from "../api/userProfile/UserProfile";

export const USERPROFILE_TITLE_FIELD = "tagName";

export const UserProfileTitle = (record: TUserProfile): string => {
  return record.tagName?.toString() || String(record.id);
};
