import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageLimit = (state: StateSchema) =>
  state.articles?.limit || 9;
