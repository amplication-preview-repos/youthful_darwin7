import { SortOrder } from "../../util/SortOrder";

export type FreelanceJobOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobDescription?: SortOrder;
  jobTitle?: SortOrder;
  paymentMethod?: SortOrder;
  postedDate?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
