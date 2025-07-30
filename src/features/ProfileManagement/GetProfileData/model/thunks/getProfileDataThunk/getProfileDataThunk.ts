import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile, ProfileExample } from "entities/Profile";

export const getProfileDataThunk = createAsyncThunk<
  Profile,
  string | undefined,
  ThunkConfig<string>
>("profile/getProfileDataThunk", async (profileId, thunkApi) => {
  if (__IS_STORYBOOK__) return ProfileExample();

  const { extra, rejectWithValue } = thunkApi;

  if (!profileId) {
    console.log("no profileId");
    return rejectWithValue("error");
  }

  try {
    const response = await extra.api.get<Profile[]>(`/profile`);

    const profile = response.data.filter((d) => d.id === profileId)[0];

    if (!profile) throw new Error();
    return profile;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
