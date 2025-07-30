import { createEntityAdapter, PayloadAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Comment, CommentExample } from "entities/Comment";
import { buildSlice } from "shared/lib/srote/buildSlice";
import { getCommentsByArticleIdThunk } from "../services/getCommentsByArticleId/getCommentsByArticleIdThunk";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment: Comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => {
    if (__IS_STORYBOOK__) {
      let comments: Comment[] = [
        CommentExample(),
        CommentExample(),
        CommentExample(),
        CommentExample(),
        CommentExample(),
        CommentExample(),
        CommentExample(),
      ];

      console.log("comments slice ", comments);
      return commentsAdapter.setAll(
        commentsAdapter.getInitialState(),
        comments
      );
    }

    return (
      state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
    );
  }
);

export const articleDetailsCommentsSlice = buildSlice({
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

export const {
  actions: articleDetailsCommentsActions,
  reducer: articleDetailsCommentsReducer,
  useActions: useArticleDetailsCommentsActions,
} = articleDetailsCommentsSlice;
