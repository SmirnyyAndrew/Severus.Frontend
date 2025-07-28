import { PayloadAction } from "@reduxjs/toolkit";
import { buildSlice } from "shared/lib/srote/buildSlice";
import { AddNewCommentFormSchema } from "../types/AddNewCommentFormSchema";

const initialState: AddNewCommentFormSchema = {
  error: undefined,
  text: "",
};

export const AddNewCommentFormSlice = buildSlice({
  name: "add.new.comment.form.slice",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const {
  actions: AddNewCommentFormActions,
  reducer: AddNewCommentFormReducer,
  useActions: useAddNewCommentFormActions,
} = AddNewCommentFormSlice;
