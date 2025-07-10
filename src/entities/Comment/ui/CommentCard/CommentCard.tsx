import { Comment } from "entities/Comment/model/types/Comment";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { errorUserAvatar } from "shared/const/plugFiles";
import { classNames } from "shared/lib/classNames/classNames";
import { Avatar, AvatarSize } from "shared/ui/Avatar";
import { Skeleton } from "shared/ui/Skeleton";
import { Column, Row } from "shared/ui/Stack";
import { Text, TextSize } from "shared/ui/Text";
import cls from "./CommentCard.module.scss";

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment, isLoading } = props;
  const navigate = useNavigate();

  if (isLoading)
    return (
      <div
        className={classNames(
          cls.LoadingCommentCard,
          { isLoadging: isLoading },
          [className]
        )}
      >
        <div className={cls.userData}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={cls.userNickname} />
        </div>
        <Skeleton width={"100%"} height={50} />
      </div>
    );

  const onClickUserName = () => {
    console.log("click");
    const id = comment.user?.id;
    if (id) {
      navigate(`${RoutePath.profile}${id}`);
    } else {
      console.log("no id");
    }
  };

  return (
    <Column gap="20" className={classNames(cls.CommentCard, {}, [className])}>
      <Row alignItems="center" className={cls.userData}>
        <Avatar
          img={comment.user.avatar ?? errorUserAvatar}
          isRound
          size={AvatarSize.S}
        />

        <Text
          className={cls.userNickname}
          size={TextSize.L}
          text={comment.user?.username ?? "-"}
          onClick={onClickUserName}
        />
      </Row>

      <Row justifyContents="space_between">
        <Text size={TextSize.XS} text={comment.text} />
        <Text size={TextSize.XS} text={"10.02.2025 12:33"} />
      </Row>
    </Column>
  );
};
