import { InfluencerPage as TInfluencerPage } from "../api/influencerPage/InfluencerPage";

export const INFLUENCERPAGE_TITLE_FIELD = "title";

export const InfluencerPageTitle = (record: TInfluencerPage): string => {
  return record.title?.toString() || String(record.id);
};
