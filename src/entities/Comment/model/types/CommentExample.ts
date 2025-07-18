import { USER_AVATAR_ERROR } from "shared/const/plugFiles";
import { Comment } from "./Comment";

export const CommentExample: Comment = {
  id: "1",
  user: { id: "1", username: "username", avatar: USER_AVATAR_ERROR },
  text: "comment text",
};
