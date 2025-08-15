import { useArticle } from "entities/Article";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "shared/const/router";
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
  const { id } = useParams();
  const { authData } = useUserAuth();
  const { articleData, getArticleById } = useArticle();

  useEffect(() => {
    if (id) getArticleById(id);
  }, [getArticleById, id]);

  const navigate = useNavigate();
  const onBackButtonClick = () => {
    navigate(Routes.Article.All());
  };

  const onEditButtonClick = () => {
    console.log("edit id", id);
    navigate(Routes.Article.Edit(id));
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
