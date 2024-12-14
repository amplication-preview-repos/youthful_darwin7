import { FreelanceCategory as TFreelanceCategory } from "../api/freelanceCategory/FreelanceCategory";

export const FREELANCECATEGORY_TITLE_FIELD = "categoryName";

export const FreelanceCategoryTitle = (record: TFreelanceCategory): string => {
  return record.categoryName?.toString() || String(record.id);
};
