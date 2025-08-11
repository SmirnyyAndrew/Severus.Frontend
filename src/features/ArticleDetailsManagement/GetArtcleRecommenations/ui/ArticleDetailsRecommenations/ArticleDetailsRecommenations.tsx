import { ArticleList } from "entities/Article/ui/ArticleListManagement/ArticleList";
import { classNames } from "shared/lib/classNames/classNames";
import { Column } from "shared/ui/Stack";
import { Text, TextSize } from "shared/ui/Text";
import { TextThemes } from "shared/ui/Text/model/types/TextThemes";
import { useGetArticleRecommendations } from "../../model/api/recommendationsApi";
import * as cls from "./ArticleDetailsRecommenations.module.scss";

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
  } = useGetArticleRecommendations(3);

  if (isError)
    return (
      <Text size={TextSize.L} textTheme={TextThemes.ERROR} text={"Ошибка"} />
    );

  return (
    <Column
      data-testid="ArticleDetailsRecommenations"
      gap="16"
      className={classNames(cls.ArticleDetailsRecommenations, {}, [className])}
    >
      <Text size={TextSize.L} text={"Рекомендуем"} />
      <ArticleList
        className={cls.list}
        view={"GRID"}
        articles={recommendations}
        isLoading={isLoading}
        target="_blank"
      />
    </Column>
  );
};
