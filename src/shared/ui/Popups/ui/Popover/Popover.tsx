import { Popover as HPopover } from "@headlessui/react";
import { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { DropdownDirections } from "shared/types/dropDownDirections/DropdownDirections";
import { MapDropdownDirection } from "shared/types/dropDownDirections/MapDropdownDirection";
import { TestProps } from "shared/types/tests/testProps";
import * as popupCls from "./../../styles/popum.module.scss";
import * as cls from "./Popover.module.scss";

interface PopoverProps extends TestProps {
  className?: string;
  trigger?: ReactNode;
  direction?: DropdownDirections;
  children: ReactNode;
}

export const Popover = (props: PopoverProps) => {
  const {
    className,
    trigger,
    children,
    direction = "bottom right",
    "data-testid": testId = "Popover",
  } = props;

  const dropdownDirection = MapDropdownDirection[direction];

  return (
    <HPopover data-testid={testId} className={classNames(cls.Popover, {})}>
      <HPopover.Button
        className={classNames(popupCls.trigger, {}, [
          popupCls[dropdownDirection],
        ])}
      >
        {trigger}
      </HPopover.Button>
      <HPopover.Panel
        className={classNames(cls.panel, {}, [popupCls[dropdownDirection]])}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
