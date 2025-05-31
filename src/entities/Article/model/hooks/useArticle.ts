import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { getArticle } from "../selectors/getArticle/getArticle";
import { getArticleByIdThunk } from "../thunks/getArticleByIdThunk/getArticleByIdThunk";

export const useArticle = () => {
  const dispatch = useAppDispatch();
  const article = useSelector(getArticle);
  const articleData = article?.data;
  const isLoading = article?.isLoading;
  const error = article?.error;

  const getArticleById = useCallback(
    (id: string) => {
      dispatch(getArticleByIdThunk(id));
    },
    [dispatch]
  );

  return { getArticleById, articleData, isLoading, error };
};
