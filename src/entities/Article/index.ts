import { useArticle } from "./model/hooks/useArticle";
import { getArticle } from "./model/selectors/getArticle/getArticle";
import {
  ArticleActions,
  ArticleReducer,
  ArticleSlice,
} from "./model/slice/ArticleSlice";
import { getArticleByIdThunk } from "./model/thunks/getArticleByIdThunk/getArticleByIdThunk";
import { Article } from "./model/types/ArticleManagement/Article";
import type { ArticleDetailsSchema } from "./model/types/ArticleManagement/ArticleDetailsSchema";
import { ArticleExample } from "./model/types/ArticleManagement/ArticleExample";
import { ArticleType } from "./model/types/ArticleManagement/ArticleType";
import { ArticleViewType } from "./model/types/ArticleManagement/ArticleViewType";
import { ArticleBlock } from "./model/types/BlockManagement/ArticleBlock";
import { ArticleDetails } from "./ui/ArticleDetails";

export {
  Article,
  ArticleActions,
  ArticleBlock,
  ArticleDetails,
  ArticleDetailsSchema,
  ArticleReducer,
  ArticleSlice,
  ArticleType as ArticleTag,
  ArticleViewType,
  getArticle,
  getArticleByIdThunk,
  useArticle,
};

export { ArticleExample };
