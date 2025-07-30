import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment, CommentExample } from "entities/Comment";

export const addNewCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>("articleDetails/AddNewCommentForArticle", async (text, thunkApi) => {
  if (__IS_STORYBOOK__) return CommentExample();

  const { extra, rejectWithValue, getState } = thunkApi;
  const articleId = getState().article?.data?.id;
  const userId = getState().user?.authData?.id;

  if (!userId || !articleId || !text) {
    return rejectWithValue("no data");
  }

  try {
    const response = await extra.api.post<Comment>(`/comments`, {
      articleId: articleId,
      userId: userId,
      text,
    });

    if (!response.data) throw new Error();
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
