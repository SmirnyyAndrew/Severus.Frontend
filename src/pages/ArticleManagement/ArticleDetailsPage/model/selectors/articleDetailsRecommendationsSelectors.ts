import { StateSchema } from "app/providers/StoreProvider";

export const getArticleRecommendationsError = (state: StateSchema) =>
  state.articleDetailsPage?.comments?.error;

export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.comments?.isLoading ?? false;
