import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment, CommentExample } from "entities/Comment";

export const getCommentsByArticleIdThunk = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>("article/getCommentsByArticleIdThunk", async (articleId, thunkApi) => {
  if (__IS_STORYBOOK__)
    return [CommentExample(), CommentExample(), CommentExample()];

  const { extra, rejectWithValue } = thunkApi;

  if (!articleId) return rejectWithValue("error");

  try {
    const response = await extra.api.get<Comment[]>(`/comments`, {
      params: {
        articleId,
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
