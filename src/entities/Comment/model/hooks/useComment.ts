import { useCallback } from "react";
import { useCommentActions } from "../slice/CommentSlice";

export const useComment = () => {
  // const value = useSelector(getCommentValue);
  const { action: actionDispatch } = useCommentActions();

  const action = useCallback(() => {
    actionDispatch();
  }, []);

  return { action };
};
