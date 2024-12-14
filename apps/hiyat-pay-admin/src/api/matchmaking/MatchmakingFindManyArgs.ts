import { MatchmakingWhereInput } from "./MatchmakingWhereInput";
import { MatchmakingOrderByInput } from "./MatchmakingOrderByInput";

export type MatchmakingFindManyArgs = {
  where?: MatchmakingWhereInput;
  orderBy?: Array<MatchmakingOrderByInput>;
  skip?: number;
  take?: number;
};
