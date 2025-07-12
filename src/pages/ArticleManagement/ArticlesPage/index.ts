import { useArticlesPage } from "./model/hooks/useArticlesPage";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from "./model/selectors/articlesPageSelectors/articlesPageSelectors";
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
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  useArticlesPage,
};
