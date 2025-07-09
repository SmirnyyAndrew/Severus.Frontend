import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import {
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
  getArticleRecommendationsThunk,
} from "../..";
import { getArticleRecommendations } from "../slice/articleDetailsRecommendationsSlice";

export const useArticleDetailsRecommendations = () => {
  const dispatch = useAppDispatch();
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsError = useSelector(getArticleRecommendationsError);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );

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
