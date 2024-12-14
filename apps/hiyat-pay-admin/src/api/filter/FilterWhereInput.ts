import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FilterWhereInput = {
  avatar?: JsonFilter;
  emoji?: JsonFilter;
  id?: StringFilter;
  photo?: JsonFilter;
  photoDuration?: "Option1";
  photoSharingDuration?: "Option1";
  profileColor?: "Option1";
  user?: UserWhereUniqueInput;
  userProfileColor?: "Option1";
};
