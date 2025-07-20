import { NotificationList } from "entities/Notification/ui/NotificationList/NotificationList";
import { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import NotificationIcon from "shared/assets/icons/menu/notification-icon.svg";
import { AnimationProvider } from "shared/lib/components/AnimationProvider";
import { DropdownDirections } from "shared/types/dropDownDirections/DropdownDirections";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { Drawer } from "shared/ui/Drawer/Drawer";
import { Icon, IconFills } from "shared/ui/Icon";
import { Popover } from "shared/ui/Popups";

interface NotificationButtonProps {
  className?: string;
  dropDownDirection?: DropdownDirections;
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const { className, dropDownDirection = "bottom left" } = props;

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const onCloseDrawer = () => {
    setIsOpenDrawer(false);
  };

  const notificationClickHandler = () => {
    setIsOpenDrawer(true);
  };

  const trigger = (
    <Button onClick={notificationClickHandler} buttonTheme={ButtonTheme.CLEAR}>
      <Icon Svg={NotificationIcon} iconFill={IconFills.BACKGROUND} />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover direction={dropDownDirection} trigger={trigger}>
          <NotificationList />
        </Popover>
      </BrowserView>

      <MobileView>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isOpenDrawer} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </div>
  );
};
