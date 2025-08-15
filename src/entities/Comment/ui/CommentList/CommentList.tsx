import { useArticleDetailsComments } from "pages/ArticleManagement/ArticleDetailsPage";
import { useEffect } from "react";
import { Column } from "shared/ui/Stack";
import { Text } from "shared/ui/Text";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentListProps {
  className?: string;
}

export const CommentList = (props: CommentListProps) => {
  const { className } = props;

  const { comments, getCommentsForArticle } = useArticleDetailsComments();

  useEffect(() => {
    getCommentsForArticle();
  }, [getCommentsForArticle]);

  return (
    <Column
      maxWidth
      data-testid="CommentList"
      justifyContents="start"
      alignItems="start"
      className={className}
    >
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard comment={comment} key={comment.id} />
        ))
      ) : (
        <Text text="Комментариев нет" />
      )}
    </Column>
  );
};
