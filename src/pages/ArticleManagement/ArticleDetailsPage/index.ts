import { addNewCommentForArticle } from "./model/thunks/addNewCommentForArticle/addNewCommentForArticle";
import { getCommentsByArticleIdThunk } from "./model/thunks/getCommentsByArticleId/getCommentsByArticleIdThunk";
import { ArticleDetailsCommentsSchema } from "./model/types/ArticleDetailsCommentsSchema";
import { ArticleDetailsPageAsync } from "./ui/ArticleDetailsPage.async";

export {
  addNewCommentForArticle,
  ArticleDetailsCommentsSchema,
  ArticleDetailsPageAsync as ArticleDetailsPage,
  getCommentsByArticleIdThunk,
};
