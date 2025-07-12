import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleViewType } from "entities/Article";
import { ArticleType } from "entities/Article/model/types/ArticleManagement/ArticleType";
import { ArticleSortField } from "features/ArticleDetailsManagement/ArticleSortAndFilter";
import {
  GRID_ELEMENTS_COUNT,
  LIST_ELEMENTS_COUNT,
} from "shared/const/elementsCount";
import { ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { SortOrder } from "shared/types/sortOrder/SortOrder";
import { getArticlesListThunk } from "../..";
import { ArticlePageSchema as ArticlesPageSchema } from "../types/ArticlesPageSchema";

const initialState: ArticlesPageSchema = {
  isLoading: false,
  error: undefined,
  page: 1,
  hasMore: true,
  // articles: [],
  order: "asc",
  search: "",
  sort: ArticleSortField.CREATED,
  _inited: false,
  ids: [],
  entities: {},
  type: ArticleType.ALL,
};

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articles || articlesAdapter.getInitialState()
);

export const ArticlesPageSlice = createSlice({
  name: "articles.page.slice",
  initialState:
    articlesAdapter.getInitialState<ArticlesPageSchema>(initialState),
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
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesListThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;

        if (action.meta.arg.replace) {
          console.log("replaced");
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(getArticlesListThunk.fulfilled, (state, action) => {
        if (state.limit) {
          if (action.meta.arg.replace) {
            articlesAdapter.setAll(state, action.payload);
          } else {
            articlesAdapter.addMany(state, action.payload);
          }
          state.hasMore = action.payload.length >= state.limit;
          state._inited = true;
          state.isLoading = false;
        }
      })
      .addCase(getArticlesListThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const ArticlesPageActions = ArticlesPageSlice.actions;
export const ArticlesPageReducer = ArticlesPageSlice.reducer;
