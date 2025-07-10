import { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AlignItems, GapSizes, JustifyContents } from "../..";
import { Flex } from "../Flex/Flex";
import cls from "./Column.module.scss";

interface ColumnProps {
  children: ReactNode;
  className?: string;
  alignItems?: AlignItems;
  justifyContents?: JustifyContents;
  gap?: GapSizes;
  maxWidth?: boolean;
  maxHeight?: boolean;
}

export const Column = (props: ColumnProps) => {
  const {
    className,
    children,
    alignItems,
    justifyContents,
    gap,
    maxWidth,
    maxHeight,
  } = props;

  return (
    <Flex
      alignItems={alignItems}
      justifyContents={justifyContents}
      gap={gap}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      className={classNames(cls.Column, {}, [className])}
    >
      {children}
    </Flex>
  );
};
