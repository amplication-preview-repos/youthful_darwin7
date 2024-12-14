export type Review = {
  comment: string | null;
  createdAt: Date;
  id: string;
  postedDate: Date | null;
  rating: number | null;
  updatedAt: Date;
  user: string | null;
};
