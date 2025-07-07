import { ArticlePageSchema } from "../../types/ArticlePageSchema";

export const getHasMore = (state: ArticlePageSchema) => state.hasMore || false;
