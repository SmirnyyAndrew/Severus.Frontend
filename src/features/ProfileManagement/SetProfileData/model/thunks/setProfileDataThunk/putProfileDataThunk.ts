import { createAsyncThunk } from "@reduxjs/toolkit";
import { StateSchema, ThunkConfig } from "app/providers/StoreProvider";
import { getProfile, Profile, ValidateProfileError } from "entities/Profile";
import { validateProfileData } from "entities/Profile/model/services/validateProfileData/validateProfileData";

export const putProfileDataThunk = createAsyncThunk<
  Profile,
  { profileId: string | undefined; profile: Profile },
  ThunkConfig<ValidateProfileError[]>
>("profile/putProfileDataThunk", async ({ profile, profileId }, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (!profileId) {
    return rejectWithValue([ValidateProfileError.NO_DATA]);
  }

  const profileSchema = getProfile(thunkApi.getState() as StateSchema);
  const errors = validateProfileData(profileSchema?.profileData);

  if (errors?.length) {
    return rejectWithValue(errors);
  }

  // const profile = getProfileData(thunkApi.getState() as StateSchema);

  try {
    console.log("PUT called with profile:", profile);

    const response = await extra.api.put<Profile>(`/profile/${profileId}`, {
      id: profile?.id,
      username: profile?.username,
      name: profile?.name,
      location: profile?.location,
      age: profile?.age,
      gender: profile?.gender,
      avatar: profile?.avatar,
    });

    if (!response.data) throw new Error();
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
