import { useCallback } from "react";
import { useSelector } from "react-redux";
import {
  getAddNewCommentFormText,
  useGetAddNewCommentFormError,
} from "../selectors/addNewCommentFormSelectors/addNewCommentFormSelectors";
import { useAddNewCommentFormActions } from "../slice/AddNewCommentFormSlice";

export const useAddNewCommentForm = () => {
  const text = useSelector(getAddNewCommentFormText);
  const error = useGetAddNewCommentFormError();
  const { setText: setTextDispatch } = useAddNewCommentFormActions();

  const setText = useCallback(
    (text: string) => {
      setTextDispatch(text);
    },
    [setTextDispatch]
  );

  return { text, error, setText };
};
