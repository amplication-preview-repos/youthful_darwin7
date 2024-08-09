import { Matchmaking as TMatchmaking } from "../api/matchmaking/Matchmaking";

export const MATCHMAKING_TITLE_FIELD = "city";

export const MatchmakingTitle = (record: TMatchmaking): string => {
  return record.city?.toString() || String(record.id);
};
