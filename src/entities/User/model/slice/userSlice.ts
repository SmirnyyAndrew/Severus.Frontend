import { PayloadAction } from "@reduxjs/toolkit";
import { getUserByIdThunk, User, UserSchema } from "entities/User";
import { setJsonSettingsThunk } from "features/ProfileManagement/SetJsonSettings";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localstorage";
import { setFeatureFlags } from "shared/lib/features";
import { buildSlice } from "shared/lib/srote/buildSlice";
import { JsonSettings } from "shared/types/JsonSettings";

const initialState: UserSchema = {
  _inited: false,
  authData: undefined,
};

export const userSlice = buildSlice({
  name: "user.slice",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      state._inited = true;
      setFeatureFlags(action.payload.features);
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
      state.authData = undefined;
      state._inited = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        setJsonSettingsThunk.fulfilled,
        (state, action: PayloadAction<JsonSettings>) => {
          state.authData && (state.authData.jsonSettings = action.payload);
        }
      )
      .addCase(getUserByIdThunk.fulfilled, (state, action) => {
        state._inited = true;
        state.authData = action.payload;
      })
      .addCase(getUserByIdThunk.rejected, (state, _) => {
        state._inited = false;
        state.authData = undefined;
      });
  },
});

export const {
  actions: userActions,
  reducer: userReducer,
  useActions: useUserActions,
} = userSlice;
