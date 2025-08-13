import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ArticleExample } from "../../mocs/ArticleExamples";
import { Article } from "../../types/ArticleManagement/Article";

export const getArticleByIdThunk = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>("article/getArticleById", async (acticleId: string, thunkApi) => {
  if (__IS_STORYBOOK__) return ArticleExample;

  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Article>(`/articles/${acticleId}`, {
      params: {
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
