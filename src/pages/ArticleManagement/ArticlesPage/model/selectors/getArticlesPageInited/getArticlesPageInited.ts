import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageInited = (state: StateSchema) =>
  state.articles?._inited || false;
