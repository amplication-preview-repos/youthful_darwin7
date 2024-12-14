import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postedDate?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
