import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleViewType } from "entities/Article";
import { ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { ArticlePageSchema } from "../types/ArticlePageSchema";

const initialState: ArticlePageSchema = {
  isLoading: false,
  error: undefined,
  view: ArticleViewType.GRID,
  page: 1,
  limit: 9,
  hasMore: true,
};

export const ArticlePageSlice = createSlice({
  name: "ArticlePage.slice",
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleViewType>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },

    initState: (state) => {
      const view =
        (localStorage.getItem(
          ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY
        ) as ArticleViewType) || ArticleViewType.GRID;

      state.view = view;
      state.limit = view === ArticleViewType.LIST ? 4 : 9;
    },
  },
  extraReducers: (builder) => {},
});

export const ArticlePageActions = ArticlePageSlice.actions;
export const ArticlePageReducer = ArticlePageSlice.reducer;
