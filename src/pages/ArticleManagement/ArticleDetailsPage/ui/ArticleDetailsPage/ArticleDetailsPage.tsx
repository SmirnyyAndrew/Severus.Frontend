import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddNewCommentForm } from "features/ArticleDetailsManagement/AddNewCommentForm";
import { ArticleRatings } from "features/ArticleDetailsManagement/ArticleRating";
import { ArticleDetailsRecommenations } from "features/ArticleDetailsManagement/GetArtcleRecommenations";
import { useParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ToggleFeatures } from "shared/lib/features";
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
  const { id } = useParams();

  if (!id) return <h1>Неверный номер статьи</h1>;

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page data-testid="ArticleDetailsPage" className={className}>
        <ArticleDetailsPageHeader />
        <ArticleDetails articleId={id} />

        <ToggleFeatures
          name="isArticleRecommendationsEnabled"
          on={<ArticleDetailsRecommenations />}
          off={<div>Wait, recommendations will be soon</div>}
        />

        <ToggleFeatures
          name="isArticleRatingsEnabled"
          on={<ArticleRatings articleId={id} />}
          off={<div>Wait, rating will be soon...</div>}
        />

        <AddNewCommentForm />
        <CommentList />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
