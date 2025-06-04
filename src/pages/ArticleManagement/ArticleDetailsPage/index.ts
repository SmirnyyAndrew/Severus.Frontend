import { getCommentsByArticleIdThunk } from "./model/thunks/getCommentsByArticleId/getCommentsByArticleIdThunk";
import { ArticleDetailsCommentsSchema } from "./model/types/ArticleDetailsCommentsSchema";
import { ArticleDetailsPageAsync } from "./ui/ArticleDetailsPage.async";

export {
  ArticleDetailsCommentsSchema,
  ArticleDetailsPageAsync as ArticleDetailsPage,
  getCommentsByArticleIdThunk,
};
