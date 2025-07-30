import { StateSchema } from "app/providers/StoreProvider";
import { buildSelector } from "shared/lib/srote/buildSelector";

export const [
  useGetArticleRecommendationsError,
  getArticleRecommendationsErrorSelector,
] = buildSelector(
  (state: StateSchema) => state.articleDetailsPage?.comments?.error
);

export const [
  useGetArticleRecommendationsIsLoading,
  getArticleRecommendationsIsLoadingSelector,
] = buildSelector(
  (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading ?? false
);
