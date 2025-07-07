import { ArticleViewType } from "entities/Article";

export interface ArticlePageSchema {
  isLoading?: boolean;
  error?: string;

  view?: ArticleViewType;

  //pagination
  page: number;
  limit?: number;
  hasMore: boolean;
}
