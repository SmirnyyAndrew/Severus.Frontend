import { useNotifications } from "entities/Notification/api/notificationApi";
import { NOTIFICATION_POOLING_INTERVAL } from "shared/const/poolings";
import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton } from "shared/ui/Skeleton";
import { Column } from "shared/ui/Stack";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import * as cls from "./NotificationList.module.scss";

interface NotificationListProps {
  className?: string;
}

export const NotificationList = (props: NotificationListProps) => {
  const { className } = props;
  const {
    data: notifications = [],
    isLoading,
    isError,
    error,
  } = useNotifications(null, {
    pollingInterval: NOTIFICATION_POOLING_INTERVAL,
  });

  if (isLoading)
    return (
      <Column
        gap="8"
        maxWidth
        className={classNames(cls.NotificationList, {}, [className])}
      >
        <Skeleton width={"100%"} border="8px" height={"100px"} />
        <Skeleton width={"100%"} border="8px" height={"100px"} />
        <Skeleton width={"100%"} border="8px" height={"100px"} />
        <Skeleton width={"100%"} border="8px" height={"100px"} />
      </Column>
    );

  return (
    <Column
      gap="8"
      maxWidth
      className={classNames(cls.NotificationList, {}, [className])}
    >
      {notifications?.map((notification) => (
        <NotificationItem key={notification.id} item={notification} />
      ))}
    </Column>
  );
};
