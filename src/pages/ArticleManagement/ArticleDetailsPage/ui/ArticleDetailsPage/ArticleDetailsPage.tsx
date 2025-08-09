import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddNewCommentForm } from "features/ArticleDetailsManagement/AddNewCommentForm";
import { ArticleRatings } from "features/ArticleDetailsManagement/ArticleRating";
import { ArticleDetailsRecommenations } from "features/ArticleDetailsManagement/GetArtcleRecommenations";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { toggleFeatures } from "shared/lib/features";
import { getFeatureFlags } from "shared/lib/features/setGetFeatures";
import { Page } from "widgets/Page";
import { ArticleDetailsPageReducers } from "../..";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: ArticleDetailsPageReducers,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams();

  const isArticleRecommendationsEnabled = getFeatureFlags(
    "isArticleRecommendationsEnabled"
  );
  const isArticleRatingsEnabled = getFeatureFlags("isArticleRatingsEnabled");

  const Element = toggleFeatures({
    name: "isArticleRatingsEnabled",
    on: () => <ArticleDetailsRecommenations />,
    off: () => <div>Wait, it's be soon</div>,
  });

  if (!id) return <h1>Неверный номер статьи</h1>;

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page data-testid="ArticleDetailsPage" className={className}>
        <ArticleDetailsPageHeader />
        <ArticleDetails articleId={id} />
        {isArticleRecommendationsEnabled && <ArticleDetailsRecommenations />}
        {isArticleRatingsEnabled && <ArticleRatings articleId={id} />}
        {Element}
        <AddNewCommentForm />
        <CommentList />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
