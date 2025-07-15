import { ArticleType, ArticleViewType } from "entities/Article";
import { ArticleSortField } from "features/ArticleDetailsManagement/ArticleSortAndFilter";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { SortOrder } from "shared/types/sortOrder/SortOrder";
import {
  ArticlesPageActions,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
} from "../..";
import { getArticlesPageType } from "../selectors/articlesPageSelectors/articlesPageSelectors";
import { getArticlesPageError } from "../selectors/getArticlesPageError/getArticlesPageError";
import { getArticlesPageHasMore } from "../selectors/getArticlesPageHasMore/getArticlesPageHasMore";
import { getArticlesPageInited } from "../selectors/getArticlesPageInited/getArticlesPageInited";
import { getArticlesPageIsLoading } from "../selectors/getArticlesPageIsLoading/getArticlesPageIsLoading";
import { getArticlesPageLimit } from "../selectors/getArticlesPageLimit/getArticlesPageLimit";
import { getArticlesPagePage } from "../selectors/getArticlesPagePage/getArticlesPagePage";
import { getArticlesPageView } from "../selectors/getArticlesPageView/getArticlesPageView";
import { getArticles } from "../slice/ArticlesPageSlice";
import { getArticlesListThunk } from "../thunks/getArticlesListThunk";

export const useArticlesPage = () => {
  const dispatch = useAppDispatch();
  const page = useSelector(getArticlesPagePage);
  const limit = useSelector(getArticlesPageLimit);
  const error = useSelector(getArticlesPageError);
  const hasMore = useSelector(getArticlesPageHasMore);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const articles = useSelector(getArticles.selectAll);
  const inited = useSelector(getArticlesPageInited);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const getArticlesWithLimit = useCallback(
    async (replace?: boolean) => {
      await dispatch(getArticlesListThunk({ replace }));
    },
    [dispatch]
  );

  const initArticles = useCallback(
    (searchParams: URLSearchParams) => {
      const keyFromLocalStorage = localStorage.getItem(
        ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY
      );
      const view: ArticleViewType =
        (keyFromLocalStorage as ArticleViewType) || ArticleViewType.GRID;

      if (keyFromLocalStorage) {
        dispatch(ArticlesPageActions.setView(view));
      }

      const orderFromUrl = searchParams.get("order") as SortOrder;
      const sortFromUrl = searchParams.get("sort") as ArticleSortField;
      const searchFromUrl = searchParams.get("search");
      const typeFromUrl = searchParams.get("type") as ArticleType;

      if (orderFromUrl) dispatch(ArticlesPageActions.setOrder(orderFromUrl));

      if (sortFromUrl) dispatch(ArticlesPageActions.setSort(sortFromUrl));

      if (searchFromUrl) dispatch(ArticlesPageActions.setSearch(searchFromUrl));

      if (typeFromUrl) dispatch(ArticlesPageActions.setType(typeFromUrl));
    },
    [dispatch, view]
  );

  const setArticlesViewType = useCallback(
    (viewType: ArticleViewType) => {
      localStorage.setItem(ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY, viewType);
      dispatch(ArticlesPageActions.setView(viewType));
    },
    [dispatch]
  );

  const setHasMore = useCallback(
    (hasMore: boolean) => {
      dispatch(ArticlesPageActions.setHasMore(hasMore));
    },
    [dispatch]
  );

  const setPage = useCallback(
    (pageNum: number) => {
      dispatch(ArticlesPageActions.setPage(pageNum));
    },
    [dispatch]
  );

  const setSearch = useCallback(
    (search: string) => {
      dispatch(ArticlesPageActions.setSearch(search));
    },
    [dispatch]
  );

  const setOrder = useCallback(
    (order: SortOrder) => {
      dispatch(ArticlesPageActions.setOrder(order));
    },
    [dispatch]
  );

  const setSort = useCallback(
    (sort: ArticleSortField) => {
      dispatch(ArticlesPageActions.setSort(sort));
    },
    [dispatch]
  );

  const setType = useCallback(
    (type: ArticleType) => {
      dispatch(ArticlesPageActions.setType(type));
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
    sort,
    order,
    search,
    type,
    getArticlesWithLimit,
    initArticles,
    setArticlesViewType,
    setPage,
    setHasMore,
    setSearch,
    setOrder,
    setSort,
    setType,
  };
};
