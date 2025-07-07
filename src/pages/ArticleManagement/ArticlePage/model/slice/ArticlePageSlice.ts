import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleViewType } from "entities/Article";
import {
  GRID_ELEMENTS_COUNT,
  LIST_ELEMENTS_COUNT,
} from "shared/const/elementsCount";
import { ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { getArticlesListThunk } from "../..";
import { ArticlePageSchema } from "../types/ArticlesPageSchema";

const initialState: ArticlePageSchema = {
  isLoading: false,
  error: undefined,
  page: 1,
  hasMore: true,
  articles: [],
  _inited: false,
};

export const ArticlePageSlice = createSlice({
  name: "ArticlePage.slice",
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleViewType>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY, action.payload);

      state.limit =
        state.view === ArticleViewType.LIST
          ? LIST_ELEMENTS_COUNT
          : GRID_ELEMENTS_COUNT;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
    initState: (state) => {
      const view =
        (localStorage.getItem(
          ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY
        ) as ArticleViewType) || ArticleViewType.GRID;

      state.view = view;
      state.limit =
        view === ArticleViewType.LIST
          ? LIST_ELEMENTS_COUNT
          : GRID_ELEMENTS_COUNT;

      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesListThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getArticlesListThunk.fulfilled, (state, action) => {
        if (state.page === 1) {
          state.articles = action.payload; // Первая страница — просто сохранить
        } else {
          state.articles = [...state.articles, ...action.payload]; // Остальные — дописываем
        }

        state.isLoading = false;
        state.error = undefined;

        // Обновляем hasMore
        if (state.limit)
          if (action.payload.length < state.limit) {
            state.hasMore = false;
          }
      })
      .addCase(getArticlesListThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const ArticlePageActions = ArticlePageSlice.actions;
export const ArticlePageReducer = ArticlePageSlice.reducer;
