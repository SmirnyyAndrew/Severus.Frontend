import { Notification } from "entities/Notification/model/types/Notification";
import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "shared/ui/Card";
import { CardTheme } from "shared/ui/Card/ui/Card";
import { Text, TextSize } from "shared/ui/Text";
import * as cls from "./NotificationItem.module.scss";

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.NotificationItem, {}, [className])}
    >
      <Text size={TextSize.XS} title={item.title} text={item.description} />
    </Card>
  );

  if (item.href)
    return (
      <a className={cls.link} target="_blank" href={item.href}>
        {content}
      </a>
    );

  return content;
};
