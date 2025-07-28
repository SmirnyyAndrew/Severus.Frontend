import { StateSchema } from "app/providers/StoreProvider";
import { buildSelector } from "shared/lib/srote/buildSelector";

export const [useGetArticle, getArticleSelector] = buildSelector(
  (state: StateSchema) => state.article
);
