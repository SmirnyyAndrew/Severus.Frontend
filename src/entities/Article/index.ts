import { useArticle } from "./model/hooks/useArticle";
import { ArticleExample } from "./model/mocs/ArticleExamples";
import {
  getArticleSelector,
  useGetArticle,
} from "./model/selectors/getArticle/getArticle";
import {
  ArticleActions,
  ArticleReducer,
  ArticleSlice,
} from "./model/slice/ArticleSlice";
import { getArticleByIdThunk } from "./model/thunks/getArticleByIdThunk/getArticleByIdThunk";
import { Article } from "./model/types/ArticleManagement/Article";
import type { ArticleDetailsSchema } from "./model/types/ArticleManagement/ArticleDetailsSchema";
import { ArticleType } from "./model/types/ArticleManagement/ArticleType";
import { ArticleViewType } from "./model/types/ArticleManagement/ArticleViewType";
import { ArticleBlock } from "./model/types/BlockManagement/ArticleBlock";
import { ArticleDetails } from "./ui/ArticleDetails";

export {
  ArticleActions,
  ArticleDetails,
  ArticleDetailsSchema,
  ArticleExample,
  ArticleReducer,
  ArticleSlice,
  ArticleType,
  getArticleByIdThunk,
  getArticleSelector,
  useArticle,
  useGetArticle,
};

export type { Article, ArticleBlock, ArticleViewType };
