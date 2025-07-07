import { ArticleViewType } from "entities/Article";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { ArticlePageActions } from "../..";
import { getArticles } from "../selectors/getArticles/getArticles";
import { getArticlesPageError } from "../selectors/getArticlesPageError/getArticlesPageError";
import { getArticlesPageHasMore } from "../selectors/getArticlesPageHasMore/getArticlesPageHasMore";
import { getArticlesPageInited } from "../selectors/getArticlesPageInited/getArticlesPageInited";
import { getArticlesPageIsLoading } from "../selectors/getArticlesPageIsLoading/getArticlesPageIsLoading";
import { getArticlesPageLimit } from "../selectors/getArticlesPageLimit/getArticlesPageLimit";
import { getArticlesPagePage } from "../selectors/getArticlesPagePage/getArticlesPagePage";
import { getArticlesPageView } from "../selectors/getArticlesPageView/getArticlesPageView";
import { getArticlesListThunk } from "../thunks/getArticlesListThunk";

export const useArticlesPage = () => {
  const dispatch = useAppDispatch();
  const page = useSelector(getArticlesPagePage);
  const limit = useSelector(getArticlesPageLimit);
  const error = useSelector(getArticlesPageError);
  const hasMore = useSelector(getArticlesPageHasMore);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const articles = useSelector(getArticles);
  const inited = useSelector(getArticlesPageInited);

  const getArticlesWithLimit = useCallback(
    async (pageNum: number) => {
      await dispatch(getArticlesListThunk({ page: pageNum }));
    },
    [dispatch]
  );

  const initArticlesViewType = useCallback(() => {
    const keyFromLocalStorage = localStorage.getItem(
      ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY
    );
    const view: ArticleViewType =
      (keyFromLocalStorage as ArticleViewType) || ArticleViewType.GRID;

    if (keyFromLocalStorage) {
      dispatch(ArticlePageActions.setView(view));
    }
  }, [dispatch, view]);

  const setArticlesViewType = useCallback(
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
    inited,
    getArticlesWithLimit,
    initArticlesViewType,
    setArticlesViewType,
    setPage,
    setHasMore,
  };
};
