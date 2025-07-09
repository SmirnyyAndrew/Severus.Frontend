import { StateSchema } from "app/providers/StoreProvider";

export const getArticleRecommendationsError = (state: StateSchema) =>
  state.articleDetailsComments?.error;

export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
  state.articleDetailsComments?.isLoading ?? false;
