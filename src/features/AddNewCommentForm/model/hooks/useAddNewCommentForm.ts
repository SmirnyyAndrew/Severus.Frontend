import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddNewCommentForm } from "../selectors/getAddNewCommentForm/getAddNewCommentForm";
import { AddNewCommentFormActions } from "../slice/AddNewCommentFormSlice";

export const useAddNewCommentForm = () => {
  const dispatch = useDispatch();
  const commentForm = useSelector(getAddNewCommentForm);
  const { text, error } = commentForm ?? { error: undefined, text: undefined };

  const setText = useCallback(
    (text: string) => {
      dispatch(AddNewCommentFormActions.setText(text));
    },
    [dispatch]
  );

  return { text, error, setText };
};
