import { rtkApi } from "shared/api/rtkApi";
import { buildMockRtkQuery } from "shared/lib/mockRtkQuery/mockRtkQuery";
import { StarRate } from "shared/ui/StarRating/StarRating";
import { ArticleRating } from "../model/types/ArticleRating";
import { ArticleRatingExample } from "../model/types/ArticleRatingExample";

interface GetArticleRatingArg {
  userId: string;
  articleId: string;
}

interface RateArticleArg {
  userId: string;
  articleId: string;
  rate: StarRate;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getRating: build.query<ArticleRating[], GetArticleRatingArg>({
      query: ({ articleId, userId }) => ({
        url: `/article-ratings`,
        params: {
          userId,
          articleId,
        },
        method: "GET",
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArg>({
      query: (arg) => ({
        url: `/article-ratings`,
        body: arg,
        method: "POST",
      }),
    }),
  }),
});

const GetArticleRatingQuery = articleRatingApi.useGetRatingQuery;
export const PostArticleRating = articleRatingApi.useRateArticleMutation;

export const GetArticleRating = buildMockRtkQuery(
  [ArticleRatingExample(), ArticleRatingExample(), ArticleRatingExample()],
  GetArticleRatingQuery
);
