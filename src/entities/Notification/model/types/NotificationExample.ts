import { faker } from "@faker-js/faker";
import { Notification } from "./Notification";

export function NotificationExample(): Notification {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    userId: faker.string.uuid(),
  };
}
