import { JsonValue } from "type-fest";

export type InfluencerPage = {
  contentUrl: JsonValue;
  createdAt: Date;
  description: string | null;
  followers: number | null;
  gifts: number | null;
  id: string;
  isBlocked: boolean | null;
  likes: number | null;
  title: string | null;
  updatedAt: Date;
};
