import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { Text, TextSize } from "shared/ui/Text";
import { getArticleCommentsIsLoading } from "../model/selectors/getArticleCommentsIsLoading";
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../model/slice/articleDetailsCommentsSlice";
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

  useEffect(() => {
    dispatch(getCommentsByArticleIdThunk(`${id}`));
  }, []);

  if (!id) return <h1>Статьи не существует</h1>;

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails articleId={id} />

        <div className={cls.commentTitleWrapper}>
          <Text
            className={cls.commentTitle}
            size={TextSize.L}
            text={"Комментарии"}
          />
        </div>

        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
