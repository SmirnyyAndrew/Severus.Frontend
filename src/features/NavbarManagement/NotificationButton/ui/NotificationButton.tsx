import { NotificationList } from "entities/Notification/ui/NotificationList/NotificationList";
import { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import NotificationIcon from "shared/assets/icons/menu/notification-icon.svg";
import { AnimationProvider } from "shared/lib/components/AnimationProvider";
import { DropdownDirections } from "shared/types/dropDownDirections/DropdownDirections";
import { Drawer } from "shared/ui/Drawer/Drawer";
import { Icon, IconFills } from "shared/ui/Icon";
import { Popover } from "shared/ui/Popups";
import * as cls from "./NotificationButton.module.scss";

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
    <Icon
      Svg={NotificationIcon}
      onClick={notificationClickHandler}
      iconFill={IconFills.BACKGROUND}
      className={cls.notificationIcon}
    />
  );

  return (
    <div className={className}>
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
