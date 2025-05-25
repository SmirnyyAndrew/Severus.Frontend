import { Profile } from "./Profile";

export interface ProfileSchema {
  profileData?: Profile;
  isLoading?: boolean;
  error?: string;
}
