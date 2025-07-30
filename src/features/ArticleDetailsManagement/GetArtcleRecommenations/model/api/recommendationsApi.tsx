import { Article, ArticleExample } from "entities/Article";
import { rtkApi } from "shared/api/rtkApi";
import { buildMockRtkQuery } from "shared/lib/mockRtkQuery/mockRtkQuery";

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query<Article[], number>({
      query: (limit: number) => ({
        url: "articles",
        method: "GET",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

const useGetArticleRecommendationsQuery =
  recommendationsApi.useGetArticleRecommendationsQuery;

export const useGetArticleRecommendations = buildMockRtkQuery(
  [ArticleExample, ArticleExample, ArticleExample],
  useGetArticleRecommendationsQuery
);
