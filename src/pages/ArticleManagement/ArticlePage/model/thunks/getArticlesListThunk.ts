import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleExample } from "entities/Article";

interface getArticlesListThunkProps {
  page: number;
  limit?: number;
}

export const getArticlesListThunk = createAsyncThunk<
  Article[],
  getArticlesListThunkProps,
  ThunkConfig<string>
>("articlePage/getArticlesList", async (props, thunkApi) => {
  if (__IS_STORYBOOK__) return [ArticleExample, ArticleExample, ArticleExample];

  const { extra, rejectWithValue } = thunkApi;
  const { page, limit = 9 } = props;

  try {
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _page: page,
        _limit: limit,
      },
    });

    if (!response.data) throw new Error();
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
