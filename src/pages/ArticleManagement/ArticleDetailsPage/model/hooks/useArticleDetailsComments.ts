import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import {
  addNewCommentForArticle,
  getCommentsByArticleIdThunk,
  useGetArticleCommentsError,
  useGetArticleCommentsIsLoading,
} from "../..";

import { getArticleComments } from "../slice/articleDetailsCommentsSlice";

export const useArticleDetailsComments = () => {
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsError = useGetArticleCommentsError();
  const commentsIsLoading = useGetArticleCommentsIsLoading();
  const { id } = useParams();

  const getCommentsForArticle = useCallback(() => {
    dispatch(getCommentsByArticleIdThunk(id));
  }, [dispatch, id]);

  const sendComment = useCallback(
    (text: string) => {
      dispatch(addNewCommentForArticle(text));
      dispatch(getCommentsByArticleIdThunk(id));
    },
    [dispatch, id]
  );

  return {
    comments,
    commentsError,
    commentsIsLoading,
    getCommentsForArticle,
    sendComment,
  };
};
