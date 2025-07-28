import { StateSchema } from "app/providers/StoreProvider";
import { buildSelector } from "shared/lib/srote/buildSelector";

export const [useGetArticleCommentsError, getArticleCommentsErrorSelector] =
  buildSelector(
    (state: StateSchema) => state.articleDetailsPage?.comments?.error
  );

export const [
  useGetArticleCommentsIsLoading,
  getArticleCommentsIsLoadingSelector,
] = buildSelector(
  (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading || false
);
