import { createSlice } from "@reduxjs/toolkit"; 
import { CommentSchema } from "../types/CommentSchema";

const initialState: CommentSchema = {
  value: 0,
};

export const CommentSlice = createSlice({
  name: "Comment.slice",
  initialState,
  reducers: {
    action: (state) => {
      state.value += 1;
    }, 
  },
});

export const CommentActions = CommentSlice.actions;
export const CommentReducer = CommentSlice.reducer;
