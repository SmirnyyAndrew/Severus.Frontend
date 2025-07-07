import { Article, ArticleViewType } from "entities/Article";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { ArticlePageActions } from "../..";
import { getError } from "../selectors/getError/getError";
import { getHasMore } from "../selectors/getHasMore/getHasMore";
import { getIsLoading } from "../selectors/getIsLoading/getIsLoading";
import { getLimit } from "../selectors/getLimit/getLimit";
import { getPage } from "../selectors/getPage/getPage";
import { getView } from "../selectors/getView/getView";
import { getArticlesListThunk } from "../thunks/getArticlesListThunk";

export const useArticlePage = () => {
  const dispatch = useAppDispatch();
  const page = useSelector(getPage);
  const limit = useSelector(getLimit);
  const error = useSelector(getError);
  const hasMore = useSelector(getHasMore);
  const isLoading = useSelector(getIsLoading);
  const view = useSelector(getView);
  const [articles, setArticles] = useState<Article[]>([]);

  // const getArticles = useCallback(async () => {
  //   const result = await dispatch(getArticlesListThunk({ page, limit }));
  //   if (result.meta.requestStatus === "fulfilled")
  //     setArticles(result.payload as Article[]);
  //   else {
  //     console.error("Failed to fetch articles", result);
  //     setArticles([]);
  //   }
  // }, [dispatch]);

  const getArticles = useCallback(async () => {
    const result = await dispatch(getArticlesListThunk({ page, limit }));
    if (result.meta.requestStatus === "fulfilled")
      setArticles(result.payload as Article[]);
    else {
      console.error("Failed to fetch articles", result);
      setArticles([]);
    }
  }, [dispatch]);

  const initArticleType = useCallback(() => {
    const keyFromLocalStorage = localStorage.getItem(
      ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY
    );
    const view: ArticleViewType =
      (keyFromLocalStorage as ArticleViewType) || ArticleViewType.GRID;

    if (keyFromLocalStorage) {
      dispatch(ArticlePageActions.setView(view));
    }
  }, [dispatch, view]);

  const setArticleViewType = useCallback(
    (viewType: ArticleViewType) => {
      localStorage.setItem(ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY, view);
      dispatch(ArticlePageActions.setView(viewType));
    },
    [dispatch]
  );

  return {
    page,
    limit,
    error,
    hasMore,
    isLoading,
    view,
    articles,
    getArticles,
    initArticleType,
    setArticleViewType,
  };
};
