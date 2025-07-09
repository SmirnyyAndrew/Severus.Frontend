import { getArticleRecommendationsThunk } from "../../../features/ArticleDetailsManagement/GetArtcleRecommenations/model/services/getArticleRecommendations/getArticleRecommendations";
import { useArticleDetailsComments } from "./model/hooks/useArticleDetailsComments";
import { useArticleDetailsRecommendations } from "./model/hooks/useArticleDetailsRecommendations";
import {
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
} from "./model/selectors/articleDetailsRecommendationsSelectors";
import { addNewCommentForArticle } from "./model/services/addNewCommentForArticle/addNewCommentForArticle";
import { getCommentsByArticleIdThunk } from "./model/services/getCommentsByArticleId/getCommentsByArticleIdThunk";
import { ArticleDetailsPageReducers } from "./model/slice";
import { getArticleRecommendations } from "./model/slice/articleDetailsRecommendationsSlice";
import { ArticleDetailsPageSchema } from "./model/types";
import { ArticleDetailsCommentsSchema } from "./model/types/ArticleDetailsCommentsSchema";
import { ArticleDetailsRecommendationsSchema } from "./model/types/ArticleDetailsRecommendationsSchema";
import { ArticleDetailsPageAsync } from "./ui/ArticleDetailsPage.async";

export {
  addNewCommentForArticle,
  ArticleDetailsCommentsSchema,
  ArticleDetailsPageAsync as ArticleDetailsPage,
  ArticleDetailsPageReducers,
  ArticleDetailsPageSchema,
  ArticleDetailsRecommendationsSchema,
  getArticleRecommendations,
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
  getArticleRecommendationsThunk,
  getCommentsByArticleIdThunk,
  useArticleDetailsComments,
  useArticleDetailsRecommendations,
};
