import { SortOrder } from "../../util/SortOrder";

export type InfluencerPageOrderByInput = {
  contentUrl?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  followers?: SortOrder;
  gifts?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
