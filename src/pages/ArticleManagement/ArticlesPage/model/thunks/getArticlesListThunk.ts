import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleExample, ArticleTag } from "entities/Article";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from "../selectors/articlesPageSelectors/articlesPageSelectors";
import { getArticlesPageLimit } from "../selectors/getArticlesPageLimit/getArticlesPageLimit";
import { getArticlesPagePage } from "../selectors/getArticlesPagePage/getArticlesPagePage";

interface getArticlesListThunkProps {
  replace?: boolean;
}

export const getArticlesListThunk = createAsyncThunk<
  Article[],
  getArticlesListThunkProps,
  ThunkConfig<string>
>("articlePage/getArticlesList", async (props, thunkApi) => {
  if (__IS_STORYBOOK__) return [ArticleExample, ArticleExample, ArticleExample];

  const { extra, getState, rejectWithValue } = thunkApi;

  const page = getArticlesPagePage(getState());
  const limit = getArticlesPageLimit(getState());
  const sort = getArticlesPageSort(getState());
  const order = getArticlesPageOrder(getState());
  const search = getArticlesPageSearch(getState());
  const type = getArticlesPageType(getState());

  try {
    addQueryParams({ sort, order, search, type });

    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order,
        q: search,
        type_like: type === ArticleTag.ALL ? undefined : type,
        _expand: "user",
      },
    });

    if (!response.data) throw new Error();
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
