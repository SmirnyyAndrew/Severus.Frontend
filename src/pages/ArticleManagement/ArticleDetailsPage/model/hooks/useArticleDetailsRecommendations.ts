import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import {
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
  getCommentsByArticleIdThunk,
} from "../..";
import { getArticleRecommendations } from "../slice/articleDetailsRecommendationsSlice";

export const useArticleDetailsRecommendations = () => {
  const dispatch = useAppDispatch();
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsError = useSelector(getArticleRecommendationsError);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );
  const { id } = useParams();

  const getRecommendations = useCallback(() => {
    dispatch(getCommentsByArticleIdThunk(`${id}`));
  }, [dispatch]);

  return {
    recommendations,
    recommendationsError,
    recommendationsIsLoading,
    getRecommendations,
  };
};
