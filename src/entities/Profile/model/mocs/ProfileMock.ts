import { faker } from "@faker-js/faker";
import { USER_AVATAR_ERROR } from "shared/const/plugFiles";
import { Profile } from "../types/Profile";

export function ProfileMock(randomValues?: boolean): Profile {
  return randomValues
    ? {
        id: faker.string.uuid(),
        username: faker.word.noun(),
        name: faker.word.noun(),
        location: faker.word.words(),
        age: faker.number.int({ min: 18, max: 36 }).toString(),
        gender: "male",
        avatar: USER_AVATAR_ERROR,
      }
    : {
        id: "241",
        username: "example_username",
        name: "name",
        location: "location",
        age: "21",
        gender: "male",
        avatar: USER_AVATAR_ERROR,
      };
}
