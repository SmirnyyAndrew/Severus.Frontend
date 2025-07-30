import {
  getAddNewCommentFormErrorSelector,
  getAddNewCommentFormText,
  useGetAddNewCommentFormError,
  useGetAddNewCommentFormText,
} from "./model/selectors/addNewCommentFormSelectors/addNewCommentFormSelectors";
import type { AddNewCommentFormSchema } from "./model/types/AddNewCommentFormSchema";
import { AddNewCommentFormAsync } from "./ui/AddNewCommentForm/AddNewCommentForm.async";

export {
  AddNewCommentFormAsync as AddNewCommentForm,
  AddNewCommentFormSchema,
  getAddNewCommentFormErrorSelector,
  getAddNewCommentFormText,
  useGetAddNewCommentFormError,
  useGetAddNewCommentFormText,
};
