import { StateSchema } from "app/providers/StoreProvider";
import { buildSelector } from "shared/lib/srote/buildSelector";

export const [useGetArticlesPagePage, getArticlesPagePageSelector] =
  buildSelector((state: StateSchema) => state.articles?.page || 1);
