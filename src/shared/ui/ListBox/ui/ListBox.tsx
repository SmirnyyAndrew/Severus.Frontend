import { Listbox as HListBox } from "@headlessui/react";
import { Fragment } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { DropdownDirections } from "../../../types/dropDownDirections/DropdownDirections";
import { MapDropdownDirection } from "../../../types/dropDownDirections/MapDropdownDirection";
import { Button } from "../../Button";
import { ButtonSize, ButtonTheme } from "../../Button/ui/Button";
import { Row } from "../../Stack";
import { Text, TextSize } from "../../Text";
import { ListBoxItem } from "../model/types/ListBoxItem";
import cls from "./ListBox.module.scss";

interface ListBoxProps {
  items: ListBoxItem[];
  value: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  className?: string;
  readonly?: boolean;
  direction?: DropdownDirections;
  label?: string;
}

export const ListBox = (props: ListBoxProps) => {
  const {
    items,
    value,
    onChange,
    className,
    label,
    readonly = false,
    defaultValue = "Выберите значение",
    direction = "bottom right",
  } = props;

  const dropdownDirection = MapDropdownDirection[direction];

  return (
    <Row gap="8">
      {label && <Text size={TextSize.XS} text={label} />}

      <HListBox
        as={"div"}
        disabled={readonly}
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button as={Fragment}>
          <Button
            size={ButtonSize.M}
            buttonTheme={ButtonTheme.BACKGROUND_INVERTED}
          >
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>

        <HListBox.Options
          className={classNames(cls.options, {}, [cls[dropdownDirection]])}
        >
          {items.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [cls.selected]: active,
                    [cls.disabled]: item.disabled,
                  })}
                >
                  {selected ? `>  ${item.value}  <` : item.value}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </Row>
  );
};
