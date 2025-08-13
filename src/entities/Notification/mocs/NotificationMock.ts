import { faker } from "@faker-js/faker";
import { Notification } from "../model/types/Notification";

export function NotificationMock(randomValues?: boolean): Notification {
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
