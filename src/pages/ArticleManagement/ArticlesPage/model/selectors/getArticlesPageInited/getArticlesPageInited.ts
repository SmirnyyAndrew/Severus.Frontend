import { StateSchema } from "app/providers/StoreProvider";
import { buildSelector } from "shared/lib/srote/buildSelector";

export const [useGetArticlesPageInited, getArticlesPageInitedSelector] =
  buildSelector((state: StateSchema) => state.articles?._inited || false);
