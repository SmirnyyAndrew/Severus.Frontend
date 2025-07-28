import { StateSchema } from "app/providers/StoreProvider";
import { ArticleType } from "entities/Article";
import { ArticleSortField } from "features/ArticleDetailsManagement/ArticleSortAndFilter";
import { buildSelector } from "shared/lib/srote/buildSelector";

export const [useGetArticlesPageOrder, getArticlesPageOrderSelector] =
  buildSelector((state: StateSchema) => state.articles?.order ?? "asc");

export const [useGetArticlesPageSort, getArticlesPageSortSelector] =
  buildSelector(
    (state: StateSchema) => state.articles?.sort ?? ArticleSortField.CREATED
  );

export const [useGetArticlesPageSearch, getArticlesPageSearchSelector] =
  buildSelector((state: StateSchema) => state.articles?.search ?? "");

export const [useGetArticlesPageType, getArticlesPageTypeSelector] =
  buildSelector(
    (state: StateSchema) => state.articles?.type ?? ArticleType.ALL
  );
