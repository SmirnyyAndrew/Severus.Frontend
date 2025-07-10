import { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AlignItems, GapSizes, JustifyContents } from "../..";
import { Flex } from "../Flex/Flex";
import cls from "./Row.module.scss";

interface RowProps {
  children: ReactNode;
  className?: string;
  alignItems?: AlignItems;
  justifyContents?: JustifyContents;
  gap?: GapSizes;
  maxWidth?: boolean;
  maxHeight?: boolean;
}

export const Row = (props: RowProps) => {
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
      className={classNames(cls.Row, {}, [className])}
    >
      {children}
    </Flex>
  );
};
