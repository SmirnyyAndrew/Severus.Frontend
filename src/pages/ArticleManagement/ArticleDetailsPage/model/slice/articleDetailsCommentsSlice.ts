import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";
import { getCommentsByArticleIdThunk } from "../services/getCommentsByArticleId/getCommentsByArticleIdThunk";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment: Comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

export const articleDetailsCommentsSlice = createSlice({
  name: "article.details.comments.slice",
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsByArticleIdThunk.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        getCommentsByArticleIdThunk.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false;
          state.error = undefined;
          commentsAdapter.setAll(state, action.payload);
        }
      )
      .addCase(getCommentsByArticleIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const articleDetailsCommentsActions =
  articleDetailsCommentsSlice.actions;
export const articleDetailsCommentsReducer =
  articleDetailsCommentsSlice.reducer;
