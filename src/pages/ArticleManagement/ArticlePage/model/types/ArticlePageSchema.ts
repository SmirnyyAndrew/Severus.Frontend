import { Article, ArticleViewType } from "entities/Article";

export interface ArticlePageSchema {
  isLoading?: boolean;
  error?: string;

  view?: ArticleViewType;
  articles: Article[];

  //pagination
  page: number;
  limit?: number;
  hasMore: boolean;
}
