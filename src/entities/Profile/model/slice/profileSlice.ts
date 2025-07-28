import { PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "entities/Profile";
import { getProfileDataThunk } from "features/ProfileManagement/GetProfileData";
import { putProfileDataThunk } from "features/ProfileManagement/SetProfileData";
import { buildSlice } from "shared/lib/srote/buildSlice";

const initialState: ProfileSchema = {
  profileData: undefined,
  isLoading: false,
  error: undefined,
  validateErrors: undefined,
};

export const profileSlice = buildSlice({
  name: "profile.slice",
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<Profile>) => {
      state.profileData = action.payload;
    },

    setProfileDataUndefined: (state) => {
      state.profileData = undefined;
    },

    setUsername: (state, action: PayloadAction<string>) => {
      if (state.profileData) {
        state.profileData = { ...state.profileData, username: action.payload };
      }
    },
    setName: (state, action: PayloadAction<string>) => {
      if (state.profileData) {
        state.profileData = { ...state.profileData, name: action.payload };
      }
    },
    setLocation: (state, action: PayloadAction<string>) => {
      if (state.profileData) {
        state.profileData = { ...state.profileData, location: action.payload };
      }
    },
    setAge: (state, action: PayloadAction<string>) => {
      if (state.profileData) {
        state.profileData = { ...state.profileData, age: action.payload };
      }
    },
    setGender: (state, action: PayloadAction<string>) => {
      if (state.profileData) {
        state.profileData = { ...state.profileData, gender: action.payload };
      }
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      if (state.profileData) {
        state.profileData = { ...state.profileData, avatar: action.payload };
      }
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
      })
      .addCase(putProfileDataThunk.pending, (state) => {
        state.validateErrors = undefined;
        state.isLoading = true;
      })
      .addCase(
        putProfileDataThunk.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.error = undefined;
          state.profileData = action.payload;
          state.validateErrors = undefined;
        }
      )
      .addCase(putProfileDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      });
  },
});

export const {
  actions: profileActions,
  reducer: profileReducer,
  useActions: useProfileActions,
} = profileSlice;
