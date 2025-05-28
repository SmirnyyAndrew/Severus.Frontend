import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile, ProfileExample } from "entities/Profile";

export const getProfileDataThunk = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/getProfileDataThunk", async (_, thunkApi) => {
  if (__IS_STORYBOOK__) return ProfileExample;

  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Profile>("/profile");

    if (!response.data) throw new Error();
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
