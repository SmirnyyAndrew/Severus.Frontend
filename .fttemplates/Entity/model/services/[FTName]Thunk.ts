import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../types/ArticleManagement/Article";
import { ArticleExample } from "../../types/ArticleManagement/ArticleExample";

export const [FTName]Thunk = createAsyncThunk<
  [FTName],
  void,
  ThunkConfig<string>
>("article/getArticleById", async (props, thunkApi) => {
  if (__IS_STORYBOOK__) return undefined;

  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Article>(`/articles`);

    if (!response.data) throw new Error();
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
