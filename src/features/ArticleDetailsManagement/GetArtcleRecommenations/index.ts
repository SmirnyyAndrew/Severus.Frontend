import { getArticleRecommendationsThunk } from "pages/ArticleManagement/ArticleDetailsPage";
import { ArticleRatingExample } from "../ArticleRating/model/types/ArticleRatingExample";
import { useGetArticleRecommendations } from "./model/api/recommendationsApi";
import { ArticleDetailsRecommenations } from "./ui/ArticleDetailsRecommenations/ArticleDetailsRecommenations";

export {
  ArticleDetailsRecommenations,
  ArticleRatingExample,
  getArticleRecommendationsThunk,
  useGetArticleRecommendations,
};
