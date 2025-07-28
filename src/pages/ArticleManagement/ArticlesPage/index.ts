import { useArticlesPage } from "./model/hooks/useArticlesPage";
import {
  getArticlesPageOrderSelector,
  getArticlesPageSearchSelector,
  getArticlesPageSortSelector,
  getArticlesPageTypeSelector,
  useGetArticlesPageOrder,
  useGetArticlesPageSearch,
  useGetArticlesPageSort,
  useGetArticlesPageType,
} from "./model/selectors/articlesPageSelectors/articlesPageSelectors";
import {
  getArticlesPageErrorSelector,
  useGetArticlesPageError,
} from "./model/selectors/getArticlesPageError/getArticlesPageError";
import {
  getArticlesPageHasMoreSelector,
  useGetArticlesPageHasMore,
} from "./model/selectors/getArticlesPageHasMore/getArticlesPageHasMore";
import {
  getArticlesPageInitedSelector,
  useGetArticlesPageInited,
} from "./model/selectors/getArticlesPageInited/getArticlesPageInited";
import {
  getArticlesPageIsLoadingSelector,
  useGetArticlesPageIsLoading,
} from "./model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading";
import {
  getArticlesPageLimitSelector,
  useGetArticlesPageLimit,
} from "./model/selectors/getArticlesPageLimit/getArticlesPageLimit";
import {
  getArticlesPagePageSelector,
  useGetArticlesPagePage,
} from "./model/selectors/getArticlesPagePage/getArticlesPagePage";
import {
  getArticlesPageViewSelector,
  useGetArticlesPageView,
} from "./model/selectors/getArticlesPageView/getArticlesPageView";

import {
  ArticlesPageActions,
  ArticlesPageReducer,
  ArticlesPageSlice,
} from "./model/slice/ArticlesPageSlice";

import { getArticlesListThunk } from "./model/thunks/getArticlesListThunk";
import type { ArticlePageSchema } from "./model/types/ArticlesPageSchema";
import { ArticlesPageAsync } from "./ui/ArticlesPage/ArticlesPage.async";

export {
  ArticlePageSchema,
  ArticlesPageAsync as ArticlesPage,
  ArticlesPageActions,
  ArticlesPageReducer,
  ArticlesPageSlice,
  getArticlesListThunk,
  getArticlesPageErrorSelector,
  getArticlesPageHasMoreSelector,
  getArticlesPageInitedSelector,
  getArticlesPageIsLoadingSelector,
  getArticlesPageLimitSelector,
  getArticlesPageOrderSelector,
  getArticlesPagePageSelector,
  getArticlesPageSearchSelector,
  getArticlesPageSortSelector,
  getArticlesPageTypeSelector,
  getArticlesPageViewSelector,
  useArticlesPage,
  useGetArticlesPageError,
  useGetArticlesPageHasMore,
  useGetArticlesPageInited,
  useGetArticlesPageIsLoading,
  useGetArticlesPageLimit,
  useGetArticlesPageOrder,
  useGetArticlesPagePage,
  useGetArticlesPageSearch,
  useGetArticlesPageSort,
  useGetArticlesPageType,
  useGetArticlesPageView,
};
