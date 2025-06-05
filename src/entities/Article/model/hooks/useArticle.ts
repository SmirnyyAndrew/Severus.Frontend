import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { getArticle } from "../selectors/getArticle/getArticle";
import { getArticleByIdThunk } from "../thunks/getArticleByIdThunk/getArticleByIdThunk";
import { getArticlesThunk } from "../thunks/getArticlesThunk/getArticlesThunk";
import { Article } from "../types/ArticleManagement/Article";
import { ArticleViewType } from "../types/ArticleManagement/ArticleViewType";

export const useArticle = () => {
  const dispatch = useAppDispatch();
  const article = useSelector(getArticle);
  const articleData = article?.data;
  const isLoading = article?.isLoading;
  const [articleViewType, setArticleViewType] = useState<ArticleViewType>();
  const error = article?.error;
  const [articles, setArticles] = useState<Article[]>([]);

  const getArticleById = useCallback(
    (id: string) => {
      dispatch(getArticleByIdThunk(id));
    },
    [dispatch]
  );

  const getArticles = useCallback(async () => {
    const result = await dispatch(getArticlesThunk());
    if (result.meta.requestStatus === "fulfilled")
      setArticles(result.payload as Article[]);
    else {
      console.error("Failed to fetch articles", result);
    }
  }, [dispatch]);

  const initArticleType = useCallback(() => {
    const keyFromLocalStorage = localStorage.getItem(
      ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY
    );
    if (keyFromLocalStorage) {
      setArticleViewType(keyFromLocalStorage as ArticleViewType);
    }
  }, []);

  return {
    articles,
    articleViewType,
    articleData,
    isLoading,
    error,
    getArticleById,
    getArticles,
    initArticleType,
    setArticleViewType,
  };
};
