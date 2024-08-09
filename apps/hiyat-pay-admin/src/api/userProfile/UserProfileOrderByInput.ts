import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  bio?: SortOrder;
  coverPhoto?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  profilePicture?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
