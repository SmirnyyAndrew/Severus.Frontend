import { ArticleType, ArticleViewType } from "entities/Article";
import { ArticleSortField } from "features/ArticleDetailsManagement/ArticleSortAndFilter";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { SortOrder } from "shared/types/sortOrder/SortOrder";

import {
  useGetArticlesPageOrder,
  useGetArticlesPageSearch,
  useGetArticlesPageSort,
  useGetArticlesPageType,
} from "../selectors/articlesPageSelectors/articlesPageSelectors";

import { useGetArticlesPageError } from "../selectors/getArticlesPageError/getArticlesPageError";
import { useGetArticlesPageHasMore } from "../selectors/getArticlesPageHasMore/getArticlesPageHasMore";
import { useGetArticlesPageInited } from "../selectors/getArticlesPageInited/getArticlesPageInited";
import { useGetArticlesPageIsLoading } from "../selectors/getArticlesPageIsLoading/getArticlesPageIsLoading";
import { useGetArticlesPageLimit } from "../selectors/getArticlesPageLimit/getArticlesPageLimit";
import { useGetArticlesPagePage } from "../selectors/getArticlesPagePage/getArticlesPagePage";
import { useGetArticlesPageView } from "../selectors/getArticlesPageView/getArticlesPageView";
import {
  getArticles,
  useArticlesPageActions,
} from "../slice/ArticlesPageSlice";
import { getArticlesListThunk } from "../thunks/getArticlesListThunk";

export const useArticlesPage = () => {
  const dispatch = useAppDispatch();
  const page = useGetArticlesPagePage();
  const limit = useGetArticlesPageLimit();
  const error = useGetArticlesPageError();
  const hasMore = useGetArticlesPageHasMore();
  const isLoading = useGetArticlesPageIsLoading();
  const view = useGetArticlesPageView();
  const articles = useSelector(getArticles.selectAll);
  const inited = useGetArticlesPageInited();
  const sort = useGetArticlesPageSort();
  const order = useGetArticlesPageOrder();
  const search = useGetArticlesPageSearch();
  const type = useGetArticlesPageType();

  const {
    initState: initStateDispatch,
    setView: setViewDispatch,
    setPage: setPageDispatch,
    setOrder: setOrderDispatch,
    setSearch: setSearchDispatch,
    setSort: setSortDispatch,
    setType: setTypeDispatch,
    setHasMore: setHasMoreDispatch,
  } = useArticlesPageActions();

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
        setViewDispatch(view);
      }

      const orderFromUrl = searchParams.get("order") as SortOrder;
      const sortFromUrl = searchParams.get("sort") as ArticleSortField;
      const searchFromUrl = searchParams.get("search");
      const typeFromUrl = searchParams.get("type") as ArticleType;

      if (orderFromUrl) setOrderDispatch(orderFromUrl);

      if (sortFromUrl) setSortDispatch(sortFromUrl);

      if (searchFromUrl) setSearchDispatch(searchFromUrl);

      if (typeFromUrl) setTypeDispatch(typeFromUrl);
    },
    [, view]
  );

  const setArticlesViewType = useCallback((viewType: ArticleViewType) => {
    localStorage.setItem(ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY, viewType);
    setViewDispatch(viewType);
  }, []);

  const setHasMore = useCallback((hasMore: boolean) => {
    setHasMoreDispatch(hasMore);
  }, []);

  const setPage = useCallback((pageNum: number) => {
    setPageDispatch(pageNum);
  }, []);

  const setSearch = useCallback((search: string) => {
    setSearchDispatch(search);
  }, []);

  const setOrder = useCallback((order: SortOrder) => {
    setOrderDispatch(order);
  }, []);

  const setSort = useCallback((sort: ArticleSortField) => {
    setSortDispatch(sort);
  }, []);

  const setType = useCallback((type: ArticleType) => {
    setTypeDispatch(type);
  }, []);

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
