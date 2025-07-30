import { StateSchema } from "app/providers/StoreProvider";
import { ArticleViewType } from "entities/Article";
import { buildSelector } from "shared/lib/srote/buildSelector";

export const [useGetArticlesPageView, getArticlesPageViewSelector] =
  buildSelector(
    (state: StateSchema) => state.articles?.view || ArticleViewType.GRID
  );
