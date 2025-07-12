import { getArticleRecommendationsThunk } from "pages/ArticleManagement/ArticleDetailsPage";
import { useGetArticleRecommendationsQuery } from "./model/api/recommendationsApi";
import { ArticleDetailsRecommenations } from "./ui/ArticleDetailsRecommenations/ArticleDetailsRecommenations";

export {
  ArticleDetailsRecommenations,
  getArticleRecommendationsThunk,
  useGetArticleRecommendationsQuery,
};
