import { StateSchema } from "app/providers/StoreProvider";
import { buildSelector } from "shared/lib/srote/buildSelector";

export const [useGetArticlesPageLimit, getArticlesPageLimitSelector] =
  buildSelector((state: StateSchema) => state.articles?.limit || 9);
