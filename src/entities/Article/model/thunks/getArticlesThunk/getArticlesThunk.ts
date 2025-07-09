import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../types/ArticleManagement/Article";
import { ArticleExample } from "../../types/ArticleManagement/ArticleExample";

export const getArticlesThunk = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>("article/getArticles", async (_, thunkApi) => {
  if (__IS_STORYBOOK__) return [ArticleExample, ArticleExample, ArticleExample];

  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: "user",
      },
    });

    if (!response.data) throw new Error();
    return response.data as Article[];
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
