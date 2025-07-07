import { StateSchema } from "app/providers/StoreProvider";
import { ArticleViewType } from "entities/Article";

export const getArticlesPageView = (state: StateSchema) =>
  state.articles?.view || ArticleViewType.GRID;
