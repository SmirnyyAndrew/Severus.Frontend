import { ArticleViewType } from "entities/Article";
import { ArticleList } from "entities/Article/ui/ArticleListManagement/ArticleList";
import { useArticleDetailsRecommendations } from "pages/ArticleManagement/ArticleDetailsPage";
import { useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Column } from "shared/ui/Stack";
import { Text, TextSize } from "shared/ui/Text";
import { TextThemes } from "shared/ui/Text/model/types/TextThemes";
import cls from "./ArticleDetailsRecommenations.module.scss";

interface ArticleDetailsRecommenationsProps {
  className?: string;
}

export const ArticleDetailsRecommenations = (
  props: ArticleDetailsRecommenationsProps
) => {
  const { className } = props;
  const { getRecommendations, recommendations, recommendationsError } =
    useArticleDetailsRecommendations();

  useEffect(() => {
    getRecommendations();
  }, []);

  if (recommendationsError)
    return (
      <Text size={TextSize.L} textTheme={TextThemes.ERROR} text={"Ошибка"} />
    );

  return (
    <Column
      gap="16"
      className={classNames(cls.ArticleDetailsRecommenations, {}, [className])}
    >
      <Text className={cls.title} size={TextSize.L} text={"Рекомендуем"} />
      <ArticleList
        className={cls.list}
        view={ArticleViewType.GRID}
        articles={recommendations}
        target="_blank"
      />
    </Column>
  );
};
