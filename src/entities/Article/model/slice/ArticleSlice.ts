import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article, getArticleByIdThunk } from "entities/Article";
import { ArticleDetailsSchema } from "../types/ArticleManagement/ArticleDetailsSchema";

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const ArticleSlice = createSlice({
  name: "article.slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticleByIdThunk.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        getArticleByIdThunk.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false;
          state.error = undefined;
          state.data = action.payload;
        }
      )
      .addCase(getArticleByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const ArticleActions = ArticleSlice.actions;
export const ArticleReducer = ArticleSlice.reducer;
