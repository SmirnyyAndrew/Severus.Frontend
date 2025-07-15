import { useArticle } from "entities/Article";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AppRoutes,
  getRoutePathWithId,
  RoutePath,
} from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { Row } from "shared/ui/Stack";
import * as cls from "./ArticleDetailsPageHeader.module.scss";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = (
  props: ArticleDetailsPageHeaderProps
) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { authData } = useUserAuth();
  const { articleData, getArticleById } = useArticle();

  useEffect(() => {
    if (id) getArticleById(id);
  }, []);

  const navigate = useNavigate();
  const onBackButtonClick = () => {
    navigate(RoutePath.articles);
  };

  const onEditButtonClick = () => {
    navigate(getRoutePathWithId(AppRoutes.ARTICLE_EDIT, id));
  };

  return (
    <Row
      justifyContents="space_between"
      className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}
    >
      <Button onClick={onBackButtonClick}>Назад</Button>
      {articleData?.user?.id === authData?.id && (
        <Button
          buttonTheme={ButtonTheme.BACKGROUND_INVERTED}
          onClick={onEditButtonClick}
        >
          Редактировать
        </Button>
      )}
    </Row>
  );
};
