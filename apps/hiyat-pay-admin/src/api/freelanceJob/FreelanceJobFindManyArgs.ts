import { FreelanceJobWhereInput } from "./FreelanceJobWhereInput";
import { FreelanceJobOrderByInput } from "./FreelanceJobOrderByInput";

export type FreelanceJobFindManyArgs = {
  where?: FreelanceJobWhereInput;
  orderBy?: Array<FreelanceJobOrderByInput>;
  skip?: number;
  take?: number;
};
