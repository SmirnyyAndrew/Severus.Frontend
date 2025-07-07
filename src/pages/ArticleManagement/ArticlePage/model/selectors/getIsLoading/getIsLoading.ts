import { ArticlePageSchema } from "../../types/ArticlePageSchema";

export const getIsLoading = (state: ArticlePageSchema) =>
  state.isLoading || false;
