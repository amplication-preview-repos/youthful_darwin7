import { Filter as TFilter } from "../api/filter/Filter";

export const FILTER_TITLE_FIELD = "id";

export const FilterTitle = (record: TFilter): string => {
  return record.id?.toString() || String(record.id);
};
