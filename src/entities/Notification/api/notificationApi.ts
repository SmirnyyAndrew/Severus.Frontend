import { rtkApi } from "shared/api/rtkApi";
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

export const useNotifications = notificationApi.useGetNotificationsQuery;
