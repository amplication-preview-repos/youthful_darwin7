import { FreelanceJob as TFreelanceJob } from "../api/freelanceJob/FreelanceJob";

export const FREELANCEJOB_TITLE_FIELD = "jobTitle";

export const FreelanceJobTitle = (record: TFreelanceJob): string => {
  return record.jobTitle?.toString() || String(record.id);
};
