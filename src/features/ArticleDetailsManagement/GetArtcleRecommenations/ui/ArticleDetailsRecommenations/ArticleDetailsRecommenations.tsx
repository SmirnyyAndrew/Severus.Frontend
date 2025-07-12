import { ArticleViewType } from "entities/Article";
import { ArticleList } from "entities/Article/ui/ArticleListManagement/ArticleList";
import { classNames } from "shared/lib/classNames/classNames";
import { Column } from "shared/ui/Stack";
import { Text, TextSize } from "shared/ui/Text";
import { TextThemes } from "shared/ui/Text/model/types/TextThemes";
import { useGetArticleRecommendationsQuery } from "../../model/api/recommendationsApi";
import cls from "./ArticleDetailsRecommenations.module.scss";

interface ArticleDetailsRecommenationsProps {
  className?: string;
}

export const ArticleDetailsRecommenations = (
  props: ArticleDetailsRecommenationsProps
) => {
  const { className } = props;

  const {
    isError,
    isLoading,
    data: recommendations = [],
  } = useGetArticleRecommendationsQuery(3);

  if (isError)
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
        isLoading={isLoading}
        target="_blank"
      />
    </Column>
  );
};
