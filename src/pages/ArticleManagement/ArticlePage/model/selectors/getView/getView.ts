import { ArticleViewType } from "entities/Article";
import { ArticlePageSchema } from "../../types/ArticlePageSchema";

export const getView = (state: ArticlePageSchema) =>
  state.view || ArticleViewType.GRID;
