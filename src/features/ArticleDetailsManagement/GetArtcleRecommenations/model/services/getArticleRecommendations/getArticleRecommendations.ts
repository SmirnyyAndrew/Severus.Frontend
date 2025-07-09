import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleExample } from "entities/Article";

export const getArticleRecommendationsThunk = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>("article/getArticleRecommendationsThunk", async (_, thunkApi) => {
  if (__IS_STORYBOOK__) return [ArticleExample, ArticleExample, ArticleExample];

  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _limit: 4,
      },
    });

    if (!response.data) throw new Error();
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
