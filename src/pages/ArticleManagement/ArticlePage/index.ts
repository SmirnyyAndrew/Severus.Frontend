import { useArticlesPage } from "./model/hooks/useArticlesPage";
import {
  ArticlePageActions,
  ArticlePageReducer,
  ArticlePageSlice,
} from "./model/slice/ArticlePageSlice";
import { getArticlesListThunk } from "./model/thunks/getArticlesListThunk";
import type { ArticlePageSchema } from "./model/types/ArticlesPageSchema";
import { ArticlesPageAsync } from "./ui/ArticlesPage.async";

export {
  ArticlePageActions,
  ArticlePageReducer,
  ArticlePageSchema,
  ArticlePageSlice,
  ArticlesPageAsync as ArticlesPage,
  getArticlesListThunk,
  useArticlesPage,
};
