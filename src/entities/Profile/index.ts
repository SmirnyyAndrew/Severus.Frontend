import { useProfile } from "./model/hooks/useProfile";
import { getProfile } from "./model/selectors/getProfile/getProfile";
import { getProfileData } from "./model/selectors/getProfileData/getProfileData";
import { getProfileError } from "./model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "./model/selectors/getProfileIsLoading/getProfileIsLoading";
import { profileActions, profileReducer } from "./model/slice/profileSlice";
import { Profile } from "./model/types/Profile";
import { ProfileSchema } from "./model/types/ProfileSchema";
import { ProfileCard } from "./ui/ProfileCard/ProfileCard";

export {
  getProfile,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  Profile,
  profileActions,
  ProfileCard,
  profileReducer,
  ProfileSchema,
  useProfile,
};
