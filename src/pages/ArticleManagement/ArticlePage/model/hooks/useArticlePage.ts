import { ArticleViewType } from "entities/Article";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { ArticlePageActions } from "../..";
import { getArticles } from "../selectors/getArticles/getArticles";
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

  const articles = useSelector(getArticles);

  const getArticlesWithLimit = useCallback(
    async (pageNum: number) => {
      await dispatch(getArticlesListThunk({ page: pageNum }));
    },
    [dispatch]
  );

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
      localStorage.setItem(ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY, viewType);
      dispatch(ArticlePageActions.setView(viewType));
    },
    [dispatch]
  );

  const setHasMore = useCallback(
    (hasMore: boolean) => {
      dispatch(ArticlePageActions.setHasMore(hasMore));
    },
    [dispatch]
  );

  const setPage = useCallback(
    (pageNum: number) => {
      dispatch(ArticlePageActions.setPage(pageNum));
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
    getArticlesWithLimit,
    initArticleType,
    setArticleViewType,
    setPage,
    setHasMore,
  };
};
