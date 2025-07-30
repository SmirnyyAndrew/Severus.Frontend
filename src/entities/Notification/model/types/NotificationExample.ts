import { faker } from "@faker-js/faker";
import { Notification } from "./Notification";

export function NotificationExample(randomValues?: boolean): Notification {
  return randomValues
    ? {
        id: faker.string.uuid(),
        title: faker.lorem.sentence(),
        description: faker.lorem.sentence(),
        userId: faker.string.uuid(),
      }
    : {
        id: "123",
        title: "Заголовок",
        description: "Описание длинное (не очень)",
        userId: "4983",
      };
}
