import { InputJsonValue } from "../../types";

export type InfluencerPageUpdateInput = {
  contentUrl?: InputJsonValue;
  description?: string | null;
  followers?: number | null;
  gifts?: number | null;
  likes?: number | null;
  title?: string | null;
};
