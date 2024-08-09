import { InfluencerPageWhereInput } from "./InfluencerPageWhereInput";
import { InfluencerPageOrderByInput } from "./InfluencerPageOrderByInput";

export type InfluencerPageFindManyArgs = {
  where?: InfluencerPageWhereInput;
  orderBy?: Array<InfluencerPageOrderByInput>;
  skip?: number;
  take?: number;
};
