import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddNewCommentFormSchema } from "../types/AddNewCommentFormSchema";

const initialState: AddNewCommentFormSchema = {
  error: undefined,
  text: "",
};

export const AddNewCommentFormSlice = createSlice({
  name: "add.new.comment.form.slice",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const AddNewCommentFormActions = AddNewCommentFormSlice.actions;
export const AddNewCommentFormReducer = AddNewCommentFormSlice.reducer;
