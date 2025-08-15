import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleExample, ArticleType } from "entities/Article";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";

import {
  getArticlesPageOrderSelector,
  getArticlesPageSearchSelector,
  getArticlesPageSortSelector,
  getArticlesPageTypeSelector,
} from "../selectors/articlesPageSelectors/articlesPageSelectors";
import { getArticlesPageLimitSelector } from "../selectors/getArticlesPageLimit/getArticlesPageLimit";
import { getArticlesPagePageSelector } from "../selectors/getArticlesPagePage/getArticlesPagePage";

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

  const page = getArticlesPagePageSelector(getState());
  const limit = getArticlesPageLimitSelector(getState());
  const sort = getArticlesPageSortSelector(getState());
  const order = getArticlesPageOrderSelector(getState());
  const search = getArticlesPageSearchSelector(getState());
  const type = getArticlesPageTypeSelector(getState());

  try {
    addQueryParams({ sort, order, search, type });

    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order,
        q: search,
        type_like: type === ArticleType.ALL ? undefined : type,
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
