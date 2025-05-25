import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "entities/Profile";
import { getProfileDataThunk } from "features/GetProfileData";

const initialState: ProfileSchema = {
  profileData: undefined,
  isLoading: false,
  error: undefined,
};

export const profileSlice = createSlice({
  name: "profile.slice",
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<Profile>) => {
      state.profileData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfileDataThunk.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getProfileDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.profileData = action.payload;
      })
      .addCase(getProfileDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
