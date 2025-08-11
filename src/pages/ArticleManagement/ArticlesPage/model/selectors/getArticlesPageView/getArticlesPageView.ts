import { StateSchema } from "app/providers/StoreProvider";
import { buildSelector } from "shared/lib/srote/buildSelector";

export const [useGetArticlesPageView, getArticlesPageViewSelector] =
  buildSelector((state: StateSchema) => state.articles?.view || "GRID");
