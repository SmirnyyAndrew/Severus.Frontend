import { useProfile } from "./model/hooks/useProfile";
import { getProfile } from "./model/selectors/getProfile/getProfile";
import { getProfileData } from "./model/selectors/getProfileData/getProfileData";
import { getProfileError } from "./model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "./model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getValidationErrors } from "./model/selectors/getValidationErrors/getValidationErrors";
import { profileActions, profileReducer } from "./model/slice/profileSlice";
import { Profile, ValidateProfileError } from "./model/types/Profile";
import { ProfileDataExample } from "./model/types/ProfileDataExample";
import { ProfileExample } from "./model/types/ProfileExample";
import { ProfileSchema } from "./model/types/ProfileSchema";
import { ProfileCard } from "./ui/ProfileCard/ProfileCard";

export {
  getProfile,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getValidationErrors,
  Profile,
  profileActions,
  ProfileCard,
  ProfileDataExample,
  ProfileExample,
  profileReducer,
  ProfileSchema,
  useProfile,
  ValidateProfileError,
};
