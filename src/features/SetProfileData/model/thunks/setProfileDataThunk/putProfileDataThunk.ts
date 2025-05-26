import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "entities/Profile";

export const putProfileDataThunk = createAsyncThunk<
  Profile,
  Profile,
  ThunkConfig<string>
>("profile/putProfileDataThunk", async (profile: Profile, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.put<Profile>("/profile", {
      id: profile.id,
      username: profile.username,
      name: profile.name,
      location: profile.location,
      age: profile.age,
      gender: profile.gender,
      avatar: profile.avatar,
    });

    if (!response.data) throw new Error();
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
