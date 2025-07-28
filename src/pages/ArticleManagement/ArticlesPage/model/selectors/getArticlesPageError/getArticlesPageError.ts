import { StateSchema } from "app/providers/StoreProvider";
import { buildSelector } from "shared/lib/srote/buildSelector";

export const [useGetArticlesPageError, getArticlesPageErrorSelector] =
  buildSelector((state: StateSchema) => state.articles?.error);
