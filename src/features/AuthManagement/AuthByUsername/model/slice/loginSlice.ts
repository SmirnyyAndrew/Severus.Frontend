import { PayloadAction } from "@reduxjs/toolkit";
import { buildSlice } from "shared/lib/srote/buildSlice";
import { loginByUsernameThunk } from "../thunks/loginByUsernameThunk/loginByUsernameThunk";
import { LoginSchema } from "../types/LoginSchema";

const initialState: LoginSchema = {
  isLoading: false,
  password: "",
  username: "",
};

export const loginSlice = buildSlice({
  name: "login.slice",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsernameThunk.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsernameThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(loginByUsernameThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: loginActions,
  reducer: loginReducer,
  useActions: useLoginActions,
} = loginSlice;
