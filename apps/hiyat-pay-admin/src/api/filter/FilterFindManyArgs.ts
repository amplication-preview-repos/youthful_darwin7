import { FilterWhereInput } from "./FilterWhereInput";
import { FilterOrderByInput } from "./FilterOrderByInput";

export type FilterFindManyArgs = {
  where?: FilterWhereInput;
  orderBy?: Array<FilterOrderByInput>;
  skip?: number;
  take?: number;
};
