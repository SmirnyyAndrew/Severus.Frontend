import { rtkApi } from "shared/api/rtkApi";
import { buildMockRtkQuery } from "shared/lib/mockRtkQuery/mockRtkQuery";
import { Notification } from "../model/types/Notification";
import { NotificationExample } from "../model/types/NotificationExample";

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
  [NotificationExample(), NotificationExample(), NotificationExample()],
  useGetNotificationsQuery
);
