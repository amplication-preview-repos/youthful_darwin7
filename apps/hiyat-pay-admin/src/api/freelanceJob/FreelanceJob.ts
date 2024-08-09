export type FreelanceJob = {
  category: string | null;
  createdAt: Date;
  id: string;
  jobDescription: string | null;
  jobTitle: string | null;
  paymentMethod?: "Option1" | null;
  postedDate: Date | null;
  updatedAt: Date;
  user: string | null;
};
