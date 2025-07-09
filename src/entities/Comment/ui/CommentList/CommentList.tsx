import { useArticleDetailsComments } from "pages/ArticleManagement/ArticleDetailsPage";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text";
import { CommentCard } from "../CommentCard/CommentCard";
import cls from "./CommentList.module.scss";

interface CommentListProps {
  className?: string;
}

export const CommentList = (props: CommentListProps) => {
  const { className } = props;
  const { id } = useParams();

  const { comments, getCommentsForArticle } = useArticleDetailsComments();

  useEffect(() => {
    // getCommentsForArticle(`${id}`);
    getCommentsForArticle();
  }, []);

  return (
    <div className={classNames(cls.CommentItem, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard comment={comment} key={comment.id} />
        ))
      ) : (
        <Text text="Комментариев нет" />
      )}
    </div>
  );
};
