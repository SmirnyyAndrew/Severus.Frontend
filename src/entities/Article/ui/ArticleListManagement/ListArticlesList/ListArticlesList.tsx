import { Article } from "entities/Article";
import { HTMLAttributeAnchorTarget } from "react";
import EyeIcon from "shared/assets/icons/theme/eye.svg";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { errorUserAvatar } from "shared/const/plugFiles";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Avatar, AvatarSize } from "shared/ui/Avatar";
import { Button } from "shared/ui/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Icon, IconSize } from "shared/ui/Icon";
import { Image } from "shared/ui/Image";
import { Skeleton } from "shared/ui/Skeleton";
import { Text, TextSize } from "shared/ui/Text";
import { getArticleTypes } from "../helpers/getArticleTypes/getArticleTypes";
import cls from "./ListArticlesList.module.scss";

interface ListArticlesListProps {
  className?: string;
  articles: Article[];
  target?: HTMLAttributeAnchorTarget;
  isLoading: boolean | undefined;
}

const renderListViewTypeSkeletons = (count: number) => {
  return (
    <div className={cls.ListSkeletonsWrapper}>
      {Array.from({ length: count }).map((_, index) => (
        <div className={cls.ListSkeletons} key={`skeleton_list_${index}`}>
          <Skeleton width={1500} height={300} />
          <Skeleton width={1500} height={20} />
          <Skeleton width={1500} height={20} />
        </div>
      ))}
    </div>
  );
};

export const ListArticlesList = (props: ListArticlesListProps) => {
  const { className, articles, target = "_blank", isLoading = true } = props;

  return (
    <div className={classNames(cls.List, {}, [className])}>
      {articles.map((article) => (
        <div key={`list_${article.id}`} className={cls.ListItem}>
          <AppLink
            target={target}
            linkTheme={AppLinkTheme.PRIMARY}
            to={RoutePath.article_details + article.id}
          >
            <div className={cls.Header}>
              <div className={cls.UserInfoAndDateWrapper}>
                <div className={cls.UserInfo}>
                  <Avatar isRound size={AvatarSize.S} img={errorUserAvatar} />

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

              <Text text={article.title} size={TextSize.L} />

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
          </AppLink>
        </div>
      ))}
      {isLoading && renderListViewTypeSkeletons(5)}
    </div>
  );
};
