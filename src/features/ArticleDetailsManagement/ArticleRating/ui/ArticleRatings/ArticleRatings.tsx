import { RatingCard } from "entities/Rating";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { useEffect, useState } from "react";
import { Skeleton } from "shared/ui/Skeleton";
import { StarRate } from "shared/ui/StarRating/StarRating";
import {
  GetArticleRating,
  PostArticleRating,
} from "../../api/articleRatingApi";

interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

export const ArticleRatings = (props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const [forbiddenChange, setForbiddenChange] = useState(false);
  const { authData } = useUserAuth();
  const userId = authData?.id;

  const {
    isLoading,
    data: rating,
    refetch,
  } = GetArticleRating({
    articleId,
    userId: userId ?? "",
  });

  const [RateArticleMuttaion] = PostArticleRating();

  const handleRateArticle = async (starsCount: number, feedback?: string) => {
    const rate = starsCount as StarRate;
    if (!rate) return;

    setForbiddenChange(true);

    await RateArticleMuttaion({
      userId: userId ?? "",
      articleId,
      rate,
      feedback: feedback,
    })
      .unwrap()
      .then(() => {
        refetch();
      })
      .catch((e) => console.error(e));
  };

  const onCancel = () => {};

  const onAccept = (starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  };

  const rate = rating?.[0]?.rate;
  useEffect(() => {
    if (rate) {
      setForbiddenChange(true);
    }
  }, [rate, rating]);

  const hasRate: boolean = Boolean(rate);
  const title = hasRate ? "Ваша оценка" : "Оцените статью";

  if (isLoading) return <Skeleton width="100%" height={120} />;

  //TODO:
  return (
    <RatingCard
      starRate={rate}
      onAccept={onAccept}
      onCancel={onCancel}
      className={className}
      forbiddenChange={forbiddenChange}
      title={title}
      feedbackTitle="Оставьте отзыв, это поможет улучишть качество контента"
      hasFeedBack={!hasRate}
    />
  );
};
