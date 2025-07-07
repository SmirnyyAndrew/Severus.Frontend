import { useArticlePage } from "./model/hooks/useArticlePage";
import {
  ArticlePageActions,
  ArticlePageReducer,
  ArticlePageSlice,
} from "./model/slice/ArticlePageSlice";
import { getArticlesListThunk } from "./model/thunks/getArticlesListThunk";
import { ArticlePage } from "./model/types/ArticlePage";
import type { ArticlePageSchema } from "./model/types/ArticlePageSchema";

export {
  ArticlePage,
  ArticlePageActions,
  ArticlePageReducer,
  ArticlePageSchema,
  ArticlePageSlice,
  getArticlesListThunk,
  useArticlePage,
};
