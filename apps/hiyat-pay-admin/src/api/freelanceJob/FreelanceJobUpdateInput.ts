export type FreelanceJobUpdateInput = {
  category?: string | null;
  isBlocked?: boolean | null;
  jobDescription?: string | null;
  jobTitle?: string | null;
  paymentMethod?: "Option1" | null;
  postedDate?: Date | null;
  user?: string | null;
};
