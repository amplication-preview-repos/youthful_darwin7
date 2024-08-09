import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FilterUpdateInput = {
  avatar?: InputJsonValue;
  emoji?: InputJsonValue;
  photo?: InputJsonValue;
  photoDuration?: "Option1" | null;
  photoSharingDuration?: "Option1" | null;
  profileColor?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  userProfileColor?: "Option1" | null;
};
