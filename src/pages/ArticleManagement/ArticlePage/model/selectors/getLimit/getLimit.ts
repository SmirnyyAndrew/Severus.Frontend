import { ArticlePageSchema } from "../../types/ArticlePageSchema";

export const getLimit = (state: ArticlePageSchema) => state.limit || 9;
