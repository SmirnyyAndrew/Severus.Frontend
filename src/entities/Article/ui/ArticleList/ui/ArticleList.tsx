import { Article } from "entities/Article";
import { ArticleListViewType } from "entities/Article/model/types/ArticleManagement/ArticleListViewType";
import { useNavigate } from "react-router-dom";
import EyeIcon from "shared/assets/icons/theme/eye.svg";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { errorUserAvatar } from "shared/const/plugFiles";
import { classNames } from "shared/lib/classNames/classNames";
import { Avatar, AvatarSize } from "shared/ui/Avatar";
import { Button } from "shared/ui/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Icon, IconSize } from "shared/ui/Icon";
import { Image } from "shared/ui/Image";
import { Skeleton } from "shared/ui/Skeleton";
import { Text, TextSize } from "shared/ui/Text";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleListViewType;
}

export const ArticleList = (props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleListViewType.LIST,
  } = props;

  const navigate = useNavigate();
  const redirectToArticleDetailsPage = (id: string) => {
    console.log("id " + id);
    navigate(RoutePath.article_details + id);
  };

  const getArticleTypes = (article: Article) => {
    return (
      <div className={classNames(cls.ArticleTypes, {}, [className])}>
        <Text text={article.type.join(" ")} size={TextSize.S} />
      </div>
    );
  };

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

  const renderListViewTypeSkeletons = (count: number) => {
    return (
      <div className={cls.ListSkeletonsWrapper}>
        {Array.from({ length: count }).map((_, index) => (
          <div className={cls.ListSkeletons} key={`skeleton_list_${index}`}>
            <div className={cls.Header}>
              <div className={cls.HeaderUsername}>
                <Skeleton width={50} height={50} border="50%" />
                <Skeleton width={200} height={20} />
              </div>
              <Skeleton width={200} height={20} />
            </div>
            <Skeleton width={1000} height={300} />
            <Skeleton width={1000} height={20} />
            <Skeleton width={1000} height={20} />
          </div>
        ))}
      </div>
    );
  };

  if (view === ArticleListViewType.GRID) {
    if (isLoading) {
      return <>{renderGridViewTypeSkeletons(10)}</>;
    }

    return (
      <div className={classNames(cls.Grid, {}, [className, cls[view]])}>
        {articles.map((article) => (
          <div
            key={`grid_${article.id}`}
            className={cls.GridItem}
            onClick={() => redirectToArticleDetailsPage(article.id)}
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

            <Text
              text={
                article.title +
                article.title +
                article.title +
                article.title +
                article.title
              }
              size={TextSize.XS}
              className={cls.Titile}
            />
          </div>
        ))}
      </div>
    );
  }

  if (view === ArticleListViewType.LIST) {
    if (isLoading) {
      return <>{renderListViewTypeSkeletons(5)}</>;
    }

    return (
      <div className={classNames(cls.List, {}, [className, cls[view]])}>
        {articles.map((article) => (
          <div
            key={`list_${article.id}`}
            className={cls.ListItem}
            onClick={() => redirectToArticleDetailsPage(article.id)}
          >
            <div className={cls.Header}>
              <div className={cls.UserInfoAndDateWrapper}>
                <div className={cls.UserInfo}>
                  <Avatar isRound size={AvatarSize.S} img={errorUserAvatar} />{" "}
                  <Text
                    text={article.user?.username || "username"}
                    size={TextSize.XS}
                  />
                </div>

                <Text
                  text={article.createdAt}
                  size={TextSize.XS}
                  className={cls.ArticleDate}
                />
              </div>

              <Text text={article.title} isCenter size={TextSize.L} />

              <div className={cls.TypesViews}>{getArticleTypes(article)}</div>
            </div>

            <div className={cls.Image}>
              <Image src={article.img} key={article.title} />
            </div>

            <Text
              text={article.title.repeat(20)}
              size={TextSize.XS}
              className={cls.Titile}
            />

            <div className={cls.Footer}>
              <Button
                size={ButtonSize.M}
                onClick={() => redirectToArticleDetailsPage(article.id)}
                buttonTheme={ButtonTheme.BACKGROUND_INVERTED}
              >
                Читать далее...
              </Button>
              <Icon
                Svg={EyeIcon}
                iconSize={IconSize.L}
                textSize={TextSize.XS}
                text={`${article.views}`}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};
