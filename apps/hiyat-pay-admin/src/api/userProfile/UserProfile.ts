import { JsonValue } from "type-fest";

export type UserProfile = {
  bio: string | null;
  coverPhoto: JsonValue;
  createdAt: Date;
  id: string;
  profilePicture: JsonValue;
  tagName: string | null;
  updatedAt: Date;
  username: string | null;
};
