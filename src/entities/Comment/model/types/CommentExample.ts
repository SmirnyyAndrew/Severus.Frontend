import { faker } from "@faker-js/faker";
import { USER_AVATAR_ERROR } from "shared/const/plugFiles";
import { Comment } from "./Comment";

export function CommentExample(randomValues?: boolean): Comment {
  return randomValues
    ? {
        id: faker.string.uuid(),
        user: {
          id: faker.string.uuid(),
          username: faker.word.words(),
          avatar: USER_AVATAR_ERROR,
        },
        text: faker.lorem.sentence(),
      }
    : {
        id: "3123",
        user: {
          id: "3123",
          username: "username",
          avatar: USER_AVATAR_ERROR,
        },
        text: "Текст комментария, который о чём-то говорит",
      };
}
