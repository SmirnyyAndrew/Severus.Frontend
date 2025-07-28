import { useCallback } from "react";
import { useSelector } from "react-redux";
import {
  getAddNewCommentFormError,
  getAddNewCommentFormText,
} from "../selectors/addNewCommentFormSelectors/addNewCommentFormSelectors";
import { useAddNewCommentFormActions } from "../slice/AddNewCommentFormSlice";

export const useAddNewCommentForm = () => {
  const text = useSelector(getAddNewCommentFormText);
  const error = useSelector(getAddNewCommentFormError);
  const { setText: setTextDispatch } = useAddNewCommentFormActions();

  const setText = useCallback((text: string) => {
    setTextDispatch(text);
  }, []);

  return { text, error, setText };
};
