import { getArticleByIdThunk, useGetArticle } from "entities/Article";
import { useCallback, useState } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { ArticleViewType } from "../types/ArticleManagement/ArticleViewType";

export const useArticle = () => {
  const dispatch = useAppDispatch();
  const article = useGetArticle();
  const articleData = article?.data;
  const isLoading = article?.isLoading;
  const [articleViewType, setArticleViewType] = useState<ArticleViewType>();
  const error = article?.error;

  const getArticleById = useCallback(
    (id: string) => {
      dispatch(getArticleByIdThunk(id));
    },
    [dispatch]
  );

  return {
    articleViewType,
    articleData,
    isLoading,
    error,
    getArticleById,
    setArticleViewType,
  };
};
