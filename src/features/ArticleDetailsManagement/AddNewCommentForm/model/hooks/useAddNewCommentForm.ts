import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddNewCommentFormError,
  getAddNewCommentFormText,
} from "../selectors/addNewCommentFormSelectors/addNewCommentFormSelectors";
import { AddNewCommentFormActions } from "../slice/AddNewCommentFormSlice";

export const useAddNewCommentForm = () => {
  const dispatch = useDispatch();
  const text = useSelector(getAddNewCommentFormText);
  const error = useSelector(getAddNewCommentFormError);

  const setText = useCallback(
    (text: string) => {
      dispatch(AddNewCommentFormActions.setText(text));
    },
    [dispatch]
  );

  return { text, error, setText };
};
