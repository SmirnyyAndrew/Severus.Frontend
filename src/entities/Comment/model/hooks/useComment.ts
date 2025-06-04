import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { CommentActions } from "../slice/CommentSlice";

export const useComment = () => {
  const dispatch = useDispatch();
  // const value = useSelector(getCommentValue);

  const action = useCallback(() => {
    dispatch(CommentActions.action());
  }, [dispatch]);
 

  return { action };
};
