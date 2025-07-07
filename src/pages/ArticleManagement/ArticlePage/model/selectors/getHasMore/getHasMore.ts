import { StateSchema } from "app/providers/StoreProvider";

export const getHasMore = (state: StateSchema) =>
  state.articles?.hasMore || false;
