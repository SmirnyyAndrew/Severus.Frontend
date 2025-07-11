import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleViewType } from "entities/Article";
import { ArticleType } from "entities/Article/model/types/ArticleManagement/ArticleType";
import { ArticleSortField } from "features/ArticleDetailsManagement/ArticleSortAndFilter";
import { SortOrder } from "shared/types/sortOrder/SortOrder";

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  // articles: Article[];
  view?: ArticleViewType;

  //pagination
  page: number;
  limit?: number;
  hasMore: boolean;

  //filters
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  _inited: boolean;
}
