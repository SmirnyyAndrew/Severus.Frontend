import { StateSchema } from "app/providers/StoreProvider";
import { buildSelector } from "shared/lib/srote/buildSelector";

export const [useGetAddNewCommentFormText, getAddNewCommentFormText] =
  buildSelector((state: StateSchema) => state.addNewCommentForm?.text ?? "");

export const [useGetAddNewCommentFormError, getAddNewCommentFormErrorSelector] =
  buildSelector((state: StateSchema) => state.addNewCommentForm?.error);
