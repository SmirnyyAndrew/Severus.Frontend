import { ArticleType, ArticleViewType } from "entities/Article";
import { ArticleSortField } from "features/ArticleDetailsManagement/ArticleSortAndFilter";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { SortOrder } from "shared/types/sortOrder/SortOrder";

import {
  useGetArticlesPageOrder,
  useGetArticlesPageSearch,
  useGetArticlesPageSort,
  useGetArticlesPageType,
} from "../selectors/articlesPageSelectors/articlesPageSelectors";

import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { setJsonSettingsThunk } from "features/ProfileManagement/SetJsonSettings";
import { JsonSettings } from "shared/types/JsonSettings";
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

  const { authData } = useUserAuth();

  const {
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

  const initArticlesPage = useCallback(
    async (searchParams: URLSearchParams) => {
      const orderFromUrl = searchParams.get("order") as SortOrder;
      const sortFromUrl = searchParams.get("sort") as ArticleSortField;
      const searchFromUrl = searchParams.get("search");
      const typeFromUrl = searchParams.get("type") as ArticleType;

      if (orderFromUrl) setOrderDispatch(orderFromUrl);

      if (sortFromUrl) setSortDispatch(sortFromUrl);

      if (searchFromUrl) setSearchDispatch(searchFromUrl);

      if (typeFromUrl) setTypeDispatch(typeFromUrl);

      // вот это важно:
      const allowedViews: ArticleViewType[] = ["GRID", "LIST"];
      const userView = allowedViews.includes(
        authData?.jsonSettings?.articleViewType as ArticleViewType
      )
        ? (authData?.jsonSettings?.articleViewType as ArticleViewType)
        : "GRID";

      setViewDispatch(userView);
    },
    [authData]
  );

  const setArticlesViewType = useCallback(async (viewType: ArticleViewType) => {
    const newJsonSettings: JsonSettings = {
      ...authData?.jsonSettings,
      articleViewType: viewType,
    };
    await dispatch(
      setJsonSettingsThunk({
        userId: authData?.id,
        newJsonSettings,
      })
    );
    setViewDispatch(viewType);
  }, []);

  const initArticlesViewType = useCallback((viewType: ArticleViewType) => {
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
    initArticlesViewType,
    getArticlesWithLimit,
    initArticlesPage,
    setArticlesViewType,
    setPage,
    setHasMore,
    setSearch,
    setOrder,
    setSort,
    setType,
  };
};
