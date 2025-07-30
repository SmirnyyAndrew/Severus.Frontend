import { getArticleRecommendationsThunk } from "../../../features/ArticleDetailsManagement/GetArtcleRecommenations/model/services/getArticleRecommendations/getArticleRecommendations";
import { useArticleDetailsComments } from "./model/hooks/useArticleDetailsComments";
import { useArticleDetailsRecommendations } from "./model/hooks/useArticleDetailsRecommendations";
import {
  getArticleRecommendationsErrorSelector,
  getArticleRecommendationsIsLoadingSelector,
  useGetArticleRecommendationsError,
  useGetArticleRecommendationsIsLoading,
} from "./model/selectors/articleDetailsRecommendationsSelectors";
import {
  getArticleCommentsErrorSelector,
  getArticleCommentsIsLoadingSelector,
  useGetArticleCommentsError,
  useGetArticleCommentsIsLoading,
} from "./model/selectors/articleDetailsSelectors";

import { addNewCommentForArticle } from "./model/services/addNewCommentForArticle/addNewCommentForArticle";
import { getCommentsByArticleIdThunk } from "./model/services/getCommentsByArticleId/getCommentsByArticleIdThunk";
import { ArticleDetailsPageReducers } from "./model/slice";
import {
  articleRecommendationsAdapter,
  getArticleRecommendations,
} from "./model/slice/articleDetailsRecommendationsSlice";
import { ArticleDetailsPageSchema } from "./model/types";
import { ArticleDetailsCommentsSchema } from "./model/types/ArticleDetailsCommentsSchema";
import { ArticleDetailsRecommendationsSchema } from "./model/types/ArticleDetailsRecommendationsSchema";
import { ArticleDetailsPageAsync } from "./ui/ArticleDetailsPage/ArticleDetailsPage.async";

export {
  addNewCommentForArticle,
  ArticleDetailsPageAsync as ArticleDetailsPage,
  ArticleDetailsPageReducers,
  articleRecommendationsAdapter,
  getArticleCommentsErrorSelector,
  getArticleCommentsIsLoadingSelector,
  getArticleRecommendations,
  getArticleRecommendationsErrorSelector,
  getArticleRecommendationsIsLoadingSelector,
  getArticleRecommendationsThunk,
  getCommentsByArticleIdThunk,
  useArticleDetailsComments,
  useArticleDetailsRecommendations,
  useGetArticleCommentsError,
  useGetArticleCommentsIsLoading,
  useGetArticleRecommendationsError,
  useGetArticleRecommendationsIsLoading,
};

export type {
  ArticleDetailsCommentsSchema,
  ArticleDetailsPageSchema,
  ArticleDetailsRecommendationsSchema,
};
