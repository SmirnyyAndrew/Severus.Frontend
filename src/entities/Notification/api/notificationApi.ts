import { rtkApi } from "shared/api/rtkApi";
import { buildMockRtkQuery } from "shared/lib/mockRtkQuery/mockRtkQuery";
import { NotificationMock } from "../mocs/NotificationMock";
import { Notification } from "../model/types/Notification";

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: "/notifications",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: true,
});

const useGetNotificationsQuery = notificationApi.useGetNotificationsQuery;

export const useNotifications = buildMockRtkQuery(
  [NotificationMock(true), NotificationMock(true), NotificationMock(true)],
  useGetNotificationsQuery
);
