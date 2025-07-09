import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articles?.hasMore || false;
