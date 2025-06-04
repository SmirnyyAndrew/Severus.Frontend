import { StateSchema } from "app/providers/StoreProvider";

export const getAddNewCommentForm = (state: StateSchema) =>
  state.addNewCommentForm;
