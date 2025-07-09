import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { addNewCommentForArticle, getCommentsByArticleIdThunk } from "../..";
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "../selectors/articleDetailsSelectors";
import { getArticleComments } from "../slice/articleDetailsCommentsSlice";

export const useArticleDetailsComments = () => {
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsError = useSelector(getArticleCommentsError);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const { id } = useParams();

  const getCommentsForArticle = useCallback(() => {
    dispatch(getCommentsByArticleIdThunk(`${id}`));
  }, [dispatch]);

  const sendComment = useCallback(
    (text: string) => {
      dispatch(addNewCommentForArticle(text));
      dispatch(getCommentsByArticleIdThunk(id));
    },
    [dispatch]
  );

  return {
    comments,
    commentsError,
    commentsIsLoading,
    getCommentsForArticle,
    sendComment,
  };
};
