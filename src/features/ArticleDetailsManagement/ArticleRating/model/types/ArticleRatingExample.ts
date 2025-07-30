import { faker } from "@faker-js/faker";
import { StarRate } from "shared/ui/StarRating/StarRating";
import { ArticleRating } from "../..";

export function ArticleRatingExample(): ArticleRating {
  return {
    articleId: faker.string.uuid(),
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    rate: faker.number.int({ min: 1, max: 5 }) as StarRate,
    feedback: faker.lorem.sentence(),
  };
}
