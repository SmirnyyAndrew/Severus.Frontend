import { useNotifications } from "entities/Notification/api/notificationApi";
import { Notification } from "entities/Notification/model/types/Notification";
import { NOTIFICATION_POOLING_INTERVAL } from "shared/const/poolings";
import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton } from "shared/ui/Skeleton";
import { Column } from "shared/ui/Stack";
import { Text, TextThemes } from "shared/ui/Text";
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

  if (isError)
    return (
      <Text
        data-testid="NotificationList.Error"
        textTheme={TextThemes.ERROR}
        title={error}
      />
    );

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
      {notifications?.map((notification: Notification) => (
        <NotificationItem key={notification.id} item={notification} />
      ))}
    </Column>
  );
};
