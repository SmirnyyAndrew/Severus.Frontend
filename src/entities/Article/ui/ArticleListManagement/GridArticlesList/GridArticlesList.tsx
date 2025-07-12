import { Article } from "entities/Article/model/types/ArticleManagement/Article";
import { HTMLAttributeAnchorTarget } from "react";
import EyeIcon from "shared/assets/icons/theme/eye.svg";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Icon } from "shared/ui/Icon";
import { Image } from "shared/ui/Image";
import { Skeleton } from "shared/ui/Skeleton";
import { Text, TextSize } from "shared/ui/Text";
import { getArticleTypes } from "../helpers/getArticleTypes/getArticleTypes";
import cls from "./GridArticlesList.module.scss";

interface GridArticlesListProps {
  className?: string;
  articles: Article[];
  target?: HTMLAttributeAnchorTarget;
  isLoading: boolean | undefined;
}

const renderGridViewTypeSkeletons = (count: number) => {
  return (
    <div className={cls.GridSkeletonsWrapper}>
      {Array.from({ length: count }).map((_, index) => (
        <div className={cls.GridSkeletons} key={`skeleton_grid_${index}`}>
          <Skeleton width={300} height={300} />
          <Skeleton width={300} height={20} />
          <Skeleton width={300} height={20} />
        </div>
      ))}
    </div>
  );
};

export const GridArticlesList = (props: GridArticlesListProps) => {
  const { className, articles, isLoading = true, target = "_blank" } = props;

  return (
    <div className={classNames(cls.Grid, {}, [className])}>
      {articles.map((article) => (
        <AppLink
          target={target}
          linkTheme={AppLinkTheme.PRIMARY}
          key={`grid_${article.id}`}
          className={cls.GridItem}
          to={RoutePath.article_details + article.id}
        >
          <Text
            text={article.createdAt}
            size={TextSize.XS}
            className={cls.ArticleDate}
          />
          <div className={cls.Image}>
            <Image src={article.img} key={article.title} />
          </div>

          <div className={cls.ArticleTypes}>
            {getArticleTypes(article)}
            <Icon Svg={EyeIcon} text={`${article.views}`} />
          </div>

          <Text text={article.title} size={TextSize.XS} className={cls.Title} />
        </AppLink>
      ))}
      {isLoading && renderGridViewTypeSkeletons(10)}
    </div>
  );
};
