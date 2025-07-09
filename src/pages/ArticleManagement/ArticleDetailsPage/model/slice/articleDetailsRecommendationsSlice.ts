import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { ArticleDetailsRecommendationsSchema } from "../types/ArticleDetailsRecommendationsSchema";

const articleRecommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id,
});

export const getArticleRecommendations =
  articleRecommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsRecommendations ||
      articleRecommendationsAdapter.getInitialState()
  );

export const articleDetailsRecommendationsSlice = createSlice({
  name: "article.details.recommendations.slice",
  initialState:
    articleRecommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
      {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
      }
    ),
  reducers: {},
  extraReducers: (builder) => {},
});

export const ArticleDetailsRecommendationsActions =
  articleDetailsRecommendationsSlice.actions;
export const ArticleDetailsRecommendationsReducer =
  articleDetailsRecommendationsSlice.reducer;
