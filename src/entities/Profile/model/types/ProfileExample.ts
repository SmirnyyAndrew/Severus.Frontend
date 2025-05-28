import { errorUserAvatar } from "shared/const/plugFiles";
import { Profile } from "./Profile";

export const ProfileExample: Profile = {
  id: "1",
  username: "username",
  name: "name",
  location: "location",
  age: "22",
  gender: "gender",
  avatar: errorUserAvatar,
};
