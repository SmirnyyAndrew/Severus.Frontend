import { Comment } from "entities/Comment/model/types/Comment";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text";
import { CommentCard } from "../CommentCard/CommentCard";
import cls from "./CommentList.module.scss";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
  const { className, comments, isLoading } = props;

  console.log(comments);

  return (
    <div className={classNames(cls.CommentItem, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => <CommentCard comment={comment} />)
      ) : (
        <Text text="Empty" />
      )}
    </div>
  );
};
