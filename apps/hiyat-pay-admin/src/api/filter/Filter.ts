import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Filter = {
  avatar: JsonValue;
  createdAt: Date;
  emoji: JsonValue;
  id: string;
  photo: JsonValue;
  photoDuration?: "Option1" | null;
  photoSharingDuration?: "Option1" | null;
  profileColor?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
  userProfileColor?: "Option1" | null;
};
