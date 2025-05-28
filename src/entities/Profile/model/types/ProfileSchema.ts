import { Profile, ValidateProfileError } from "./Profile";

export interface ProfileSchema {
  profileData?: Profile;
  isLoading?: boolean;
  error?: string;
  validateErrors?: ValidateProfileError[];
}
