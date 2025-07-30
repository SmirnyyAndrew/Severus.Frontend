import { faker } from "@faker-js/faker";
import { StarRate } from "shared/ui/StarRating/StarRating";
import { ArticleRating } from "../..";

export function ArticleRatingExample(randomValues?: boolean): ArticleRating {
  return randomValues
    ? {
        articleId: faker.string.uuid(),
        id: faker.string.uuid(),
        userId: faker.string.uuid(),
        rate: faker.number.int({ min: 1, max: 5 }) as StarRate,
        feedback: faker.lorem.sentence(),
      }
    : {
        articleId: "51",
        id: "2123",
        userId: "57123",
        rate: 5 as StarRate,
        feedback: "Спасибо. Было интересно почитать!",
      };
}
