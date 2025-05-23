import { useProfile } from "./model/hooks/useProfile";
import { getProfile } from "./model/selectors/getProfile/getProfile";
import { getProfileData } from "./model/selectors/getProfileData/getProfileData";
import { profileActions, profileReducer } from "./model/slice/profileSlice";
import { Profile } from "./model/types/Profile";
import { ProfileSchema } from "./model/types/ProfileSchema";

export {
  getProfile,
  getProfileData,
  Profile,
  profileActions,
  profileReducer,
  ProfileSchema,
  useProfile,
};
