import { StateSchema } from "app/providers/StoreProvider";

export const getAddNewCommentFormText = (state: StateSchema) =>
  state.addNewCommentForm?.text ?? "";

export const getAddNewCommentFormError = (state: StateSchema) =>
  state.addNewCommentForm?.error;
