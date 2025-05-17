import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginByUsernameThunk } from "../thunks/loginByUsernameThunk/loginByUsernameThunk";
import { LoginSchema } from "../types/LoginSchema";

const initialState: LoginSchema = {
  isLoading: false,
  password: "",
  username: "",
};

export const loginSlice = createSlice({
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

export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
