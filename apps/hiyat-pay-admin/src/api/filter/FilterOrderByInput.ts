import { SortOrder } from "../../util/SortOrder";

export type FilterOrderByInput = {
  avatar?: SortOrder;
  createdAt?: SortOrder;
  emoji?: SortOrder;
  id?: SortOrder;
  photo?: SortOrder;
  photoDuration?: SortOrder;
  photoSharingDuration?: SortOrder;
  profileColor?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userProfileColor?: SortOrder;
};
