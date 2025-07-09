import { combineReducers } from "@reduxjs/toolkit";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { ArticleDetailsRecommendationsReducer } from "./articleDetailsRecommendationsSlice";

export const ArticleDetailsPageReducers = combineReducers({
  comments: articleDetailsCommentsReducer,
  recommendations: ArticleDetailsRecommendationsReducer,
});
