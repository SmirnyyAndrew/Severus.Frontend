import { PayloadAction } from "@reduxjs/toolkit";
import { buildSlice } from "shared/lib/srote/buildSlice";
import { getArticleByIdThunk } from "../thunks/getArticleByIdThunk/getArticleByIdThunk";
import { Article } from "../types/ArticleManagement/Article";
import { ArticleDetailsSchema } from "../types/ArticleManagement/ArticleDetailsSchema";

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const ArticleSlice = buildSlice({
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

export const {
  actions: ArticleActions,
  reducer: ArticleReducer,
  useActions: useArticleActions,
} = ArticleSlice;
