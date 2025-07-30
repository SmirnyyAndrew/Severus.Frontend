import { StateSchema } from "app/providers/StoreProvider";
import { buildSelector } from "shared/lib/srote/buildSelector";

export const [useGetArticlesPageHasMore, getArticlesPageHasMoreSelector] =
  buildSelector((state: StateSchema) => state.articles?.hasMore || false);
