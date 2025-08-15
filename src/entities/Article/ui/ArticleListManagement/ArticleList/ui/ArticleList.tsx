import { Article } from "entities/Article";
import { ArticleViewType } from "entities/Article/model/types/ArticleManagement/ArticleViewType";
import { HTMLAttributeAnchorTarget } from "react";
import { Text, TextSize } from "shared/ui/Text";
import { GridArticlesList } from "../../GridArticlesList/GridArticlesList";
import { ListArticlesList } from "../../ListArticlesList/ListArticlesList";
import * as cls from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading: boolean;
  view?: ArticleViewType;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = (props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = "LIST",
    target = "_self",
  } = props;

  if (articles?.length === 0 && isLoading === false)
    return (
      <div className={cls.notFoundText}>
        <Text text="Статьи не найдены" size={TextSize.L}></Text>
      </div>
    );

  switch (view) {
    case "LIST": {
      return (
        <ListArticlesList
          articles={articles}
          target={target}
          isLoading={isLoading}
          className={className}
        />
      );
    }
    case "GRID": {
      return (
        <GridArticlesList
          articles={articles}
          target={target}
          isLoading={isLoading}
          className={className}
        />
      );
    }
  }
};
