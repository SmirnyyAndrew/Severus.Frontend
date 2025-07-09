import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddNewCommentForm } from "features/ArticleDetailsManagement/AddNewCommentForm";
import { ArtcleDetailsRecommenations } from "features/ArticleDetailsManagement/GetArtcleRecommenations";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Button } from "shared/ui/Button";
import { Page } from "widgets/Page";
import { articleDetailsCommentsReducer } from "../model/slice/articleDetailsCommentsSlice";
import { ArticleDetailsRecommendationsReducer } from "../model/slice/articleDetailsRecommendationsSlice";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
  articleDetailsRecommendations: ArticleDetailsRecommendationsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams();
  const { t } = useTranslation();

  const navigate = useNavigate();
  const onBackButtonClick = () => {
    navigate(RoutePath.articles);
  };

  if (!id) return <h1>Неверный номер статьи</h1>;

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button onClick={onBackButtonClick}>Назад</Button>
        <ArticleDetails articleId={id} />
        <ArtcleDetailsRecommenations />
        <AddNewCommentForm />
        <CommentList />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
