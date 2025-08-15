import { useCallback } from "react";
import { useCommentActions } from "../slice/CommentSlice";

export const useComment = () => {
  const { action: actionDispatch } = useCommentActions();

  const action = useCallback(() => {
    actionDispatch();
  }, [actionDispatch]);

  return { action };
};
