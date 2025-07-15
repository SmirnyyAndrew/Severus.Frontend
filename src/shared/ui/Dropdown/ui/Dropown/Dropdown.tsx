import { Menu } from "@headlessui/react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { classNames } from "shared/lib/classNames/classNames";
import { DropdownDirections } from "shared/types/dropDownDirections/DropdownDirections";
import { MapDropdownDirection } from "shared/types/dropDownDirections/MapDropdownDirection";
import * as cls from "./Dropdown.module.scss";

export type DropdownItem = {
  isDisabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
};

export interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger?: ReactNode;
  direction?: DropdownDirections;
}

export const Dropdown = (props: DropdownProps) => {
  const { className, items, trigger, direction = "bottom right" } = props;

  const dropdownDirection = MapDropdownDirection[direction];

  const navigate = useNavigate();

  const onClickHandler = (item: DropdownItem) => {
    if (item.href) {
      navigate(item.href);
      return;
    }

    if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items
        className={classNames(cls.menu, {}, [cls[dropdownDirection]])}
      >
        {items.map((item) => (
          <Menu.Item as={Fragment} disabled={item.isDisabled}>
            {({ active }) => (
              <button
                type={"button"}
                onClick={() => onClickHandler(item)}
                key={item.href}
                className={classNames(
                  cls.item,
                  { [cls.active]: active, [cls.disabled]: item.isDisabled },
                  []
                )}
              >
                {item.content}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
