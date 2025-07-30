import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";

import { getArticleRecommendationsThunk } from "features/ArticleDetailsManagement/GetArtcleRecommenations";
import {
  useGetArticleRecommendationsError,
  useGetArticleRecommendationsIsLoading,
} from "../selectors/articleDetailsRecommendationsSelectors";
import { getArticleRecommendations } from "../slice/articleDetailsRecommendationsSlice";

export const useArticleDetailsRecommendations = () => {
  const dispatch = useAppDispatch();
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsError = useGetArticleRecommendationsError();
  const recommendationsIsLoading = useGetArticleRecommendationsIsLoading();

  const getRecommendations = useCallback(() => {
    dispatch(getArticleRecommendationsThunk());
  }, [dispatch]);

  return {
    recommendations,
    recommendationsError,
    recommendationsIsLoading,
    getRecommendations,
  };
};
