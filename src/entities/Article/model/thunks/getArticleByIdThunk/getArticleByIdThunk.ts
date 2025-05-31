import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../types/ArticleManagement/Article";
import { ArticleExample } from "../../types/ArticleManagement/ArticleExample";

export const getArticleByIdThunk = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>("article/getArticleById", async (acticleId: string, thunkApi) => {
  if (__IS_STORYBOOK__) return ArticleExample;

  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Article>(`/articles/${acticleId}`);

    if (!response.data) throw new Error();
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
