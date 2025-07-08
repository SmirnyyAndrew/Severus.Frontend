import { StateSchema } from "app/providers/StoreProvider";
import { ArticleTag } from "entities/Article";
import { ArticleSortField } from "features/ArticleManagement/ArticleSortAndFilter";

export const getArticlesPageOrder = (state: StateSchema) =>
  state.articles?.order ?? "asc";

export const getArticlesPageSort = (state: StateSchema) =>
  state.articles?.sort ?? ArticleSortField.CREATED;

export const getArticlesPageSearch = (state: StateSchema) =>
  state.articles?.search ?? "";

export const getArticlesPageType = (state: StateSchema) =>
  state.articles?.type ?? ArticleTag.ALL;
