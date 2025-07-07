import { StateSchema } from "app/providers/StoreProvider";
import { ArticleViewType } from "entities/Article";

export const getView = (state: StateSchema) =>
  state.articles?.view || ArticleViewType.GRID;
