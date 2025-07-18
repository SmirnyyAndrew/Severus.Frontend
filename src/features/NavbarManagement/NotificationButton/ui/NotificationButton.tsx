import { NotificationList } from "entities/Notification/ui/NotificationList/NotificationList";
import NotificationIcon from "shared/assets/icons/menu/notification-icon.svg";
import { DropdownDirections } from "shared/types/dropDownDirections/DropdownDirections";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { Icon, IconFills } from "shared/ui/Icon";
import { Popover } from "shared/ui/Popups";

interface NotificationButtonProps {
  className?: string;
  dropDownDirection?: DropdownDirections;
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const { className, dropDownDirection = "bottom left" } = props;

  const notificationClickHandler = () => {
    console.log("notificationClickHandler:", Date.now());
  };

  return (
    <Popover
      direction={dropDownDirection}
      trigger={
        <Button
          onClick={notificationClickHandler}
          buttonTheme={ButtonTheme.CLEAR}
        >
          <Icon Svg={NotificationIcon} iconFill={IconFills.BACKGROUND} />
        </Button>
      }
    >
      <NotificationList />
    </Popover>
  );
};
