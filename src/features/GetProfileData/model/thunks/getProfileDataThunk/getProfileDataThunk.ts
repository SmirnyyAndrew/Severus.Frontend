import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Profile, profileActions } from "entities/Profile";

export const getProfileDataThunk = createAsyncThunk<
  Profile,
  void,
  { rejectValue: string }
>("profile/getProfileDataThunk", async (_, thunkApi) => {
  try {
    const response = await axios.get("http://localhost:28532/profile");
    const profile: Profile = response.data;

    if (!response.data) throw new Error();

    thunkApi.dispatch(profileActions.setProfileData(response.data));

    return response.data as Profile;
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue("error");
  }
});
