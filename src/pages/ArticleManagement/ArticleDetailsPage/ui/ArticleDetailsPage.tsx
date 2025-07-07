import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddNewCommentForm } from "features/AddNewCommentForm";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { Button } from "shared/ui/Button";
import { Page } from "shared/ui/Page";
import { getArticleCommentsIsLoading } from "../model/selectors/getArticleCommentsIsLoading";
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../model/slice/articleDetailsCommentsSlice";
import { addNewCommentForArticle } from "../model/thunks/addNewCommentForArticle/addNewCommentForArticle";
import { getCommentsByArticleIdThunk } from "../model/thunks/getCommentsByArticleId/getCommentsByArticleIdThunk";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams();
  const { t } = useTranslation();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();

  const onSendComment = useCallback(
    (text: string) => {
      console.log("be4 sent");
      dispatch(addNewCommentForArticle(text));
      console.log("sent");
    },
    [dispatch]
  );

  const navigate = useNavigate();
  const onBackButtonClick = () => {
    navigate(RoutePath.articles);
  };

  useEffect(() => {
    dispatch(getCommentsByArticleIdThunk(`${id}`));
  }, [dispatch]);

  if (!id) return <h1>Статьи не существует</h1>;

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button onClick={onBackButtonClick}>Назад</Button>

        <ArticleDetails articleId={id} />

        <AddNewCommentForm onSendComment={onSendComment} />

        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
