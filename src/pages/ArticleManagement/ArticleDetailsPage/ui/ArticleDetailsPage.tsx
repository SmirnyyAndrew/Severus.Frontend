import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddNewCommentForm } from "features/ArticleDetailsManagement/AddNewCommentForm";
import { ArticleDetailsRecommenations } from "features/ArticleDetailsManagement/GetArtcleRecommenations";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "widgets/Page";
import { ArticleDetailsPageReducers } from "..";
import cls from "./ArticleDetailsPage.module.scss";
import { BackToArticlesButton } from "./BackToArticlesButton/BackToArticlesButton";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: ArticleDetailsPageReducers,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams();
  const { t } = useTranslation();

  if (!id) return <h1>Неверный номер статьи</h1>;

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <BackToArticlesButton />
        <ArticleDetails articleId={id} />
        <ArticleDetailsRecommenations />
        <AddNewCommentForm />
        <CommentList />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
