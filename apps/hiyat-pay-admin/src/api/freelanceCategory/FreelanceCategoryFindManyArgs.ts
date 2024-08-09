import { FreelanceCategoryWhereInput } from "./FreelanceCategoryWhereInput";
import { FreelanceCategoryOrderByInput } from "./FreelanceCategoryOrderByInput";

export type FreelanceCategoryFindManyArgs = {
  where?: FreelanceCategoryWhereInput;
  orderBy?: Array<FreelanceCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
