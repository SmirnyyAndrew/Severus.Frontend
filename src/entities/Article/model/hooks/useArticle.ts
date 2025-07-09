import { getArticleByIdThunk } from "entities/Article";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { getArticle } from "../selectors/getArticle/getArticle";
import { ArticleViewType } from "../types/ArticleManagement/ArticleViewType";

export const useArticle = () => {
  const dispatch = useAppDispatch();
  const article = useSelector(getArticle);
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
