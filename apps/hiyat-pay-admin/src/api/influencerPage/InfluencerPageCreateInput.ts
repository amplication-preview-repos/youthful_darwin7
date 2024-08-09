import { InputJsonValue } from "../../types";

export type InfluencerPageCreateInput = {
  contentUrl?: InputJsonValue;
  description?: string | null;
  followers?: number | null;
  gifts?: number | null;
  likes?: number | null;
  title?: string | null;
};
