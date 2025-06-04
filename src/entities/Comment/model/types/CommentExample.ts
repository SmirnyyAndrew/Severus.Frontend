import { errorUserAvatar } from "shared/const/plugFiles";
import { Comment } from "./Comment";

export const CommentExample: Comment = {
  id: "1",
  user: { id: "1", username: "username", avatar: errorUserAvatar },
  text: "comment text",
};
