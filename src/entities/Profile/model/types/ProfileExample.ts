import { faker } from "@faker-js/faker";
import { USER_AVATAR_ERROR } from "shared/const/plugFiles";
import { Profile } from "./Profile";

export function ProfileExample(): Profile {
  return {
    id: faker.string.uuid(),
    username: faker.word.noun(),
    name: faker.word.noun(),
    location: faker.word.words(),
    age: faker.number.int({ min: 18, max: 36 }).toString(),
    gender: "male",
    avatar: USER_AVATAR_ERROR,
  };
}
