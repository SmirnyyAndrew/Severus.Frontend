import { StateSchema } from "app/providers/StoreProvider";
import { buildSelector } from "shared/lib/srote/buildSelector";

export const [useGetArticlesPageIsLoading, getArticlesPageIsLoadingSelector] =
  buildSelector((state: StateSchema) => state.articles?.isLoading || false);
