import { createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "entities/User";

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: "user.slice",
  initialState,
  reducers: {
    login: (state) => {},
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
