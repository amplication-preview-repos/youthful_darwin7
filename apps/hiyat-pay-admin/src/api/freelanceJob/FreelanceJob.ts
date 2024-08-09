export type FreelanceJob = {
  category: string | null;
  createdAt: Date;
  id: string;
  isBlocked: boolean | null;
  jobDescription: string | null;
  jobTitle: string | null;
  paymentMethod?: "Option1" | null;
  postedDate: Date | null;
  updatedAt: Date;
  user: string | null;
};
