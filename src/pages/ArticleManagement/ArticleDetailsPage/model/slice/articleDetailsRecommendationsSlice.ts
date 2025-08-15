import { createEntityAdapter } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { getArticleRecommendationsThunk } from "features/ArticleDetailsManagement/GetArtcleRecommenations";
import { buildSlice } from "shared/lib/srote/buildSlice";
import { ArticleDetailsRecommendationsSchema } from "../types/ArticleDetailsRecommendationsSchema";

const articleRecommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id,
});

export const getArticleRecommendations =
  articleRecommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendations ||
      articleRecommendationsAdapter.getInitialState()
  );

export const articleDetailsRecommendationsSlice = buildSlice({
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
  extraReducers: (builder) => {
    builder
      .addCase(getArticleRecommendationsThunk.pending, (state, _) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getArticleRecommendationsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        articleRecommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(getArticleRecommendationsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: ArticleDetailsRecommendationsActions,
  reducer: ArticleDetailsRecommendationsReducer,
  useActions: useArticleDetailsRecommendationsActions,
} = articleDetailsRecommendationsSlice;
