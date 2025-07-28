import { PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { buildSlice } from "shared/lib/srote/buildSlice";

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
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
      state._inited = true;
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      state.authData = undefined;
      state._inited = false;
    },
  },
});

export const {
  actions: userActions,
  reducer: userReducer,
  useActions: useUserActions,
} = userSlice;
