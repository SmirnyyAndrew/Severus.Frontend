import { HTMLAttributes, ReactNode } from "react";
import { TestProps } from "shared/types/tests/testProps";
import { AlignItems, GapSizes, JustifyContents } from "../..";
import { Flex } from "../Flex/Flex";

interface ColumnProps extends HTMLAttributes<HTMLDivElement>, TestProps {
  children: ReactNode;
  className?: string;
  alignItems?: AlignItems;
  justifyContents?: JustifyContents;
  gap?: GapSizes;
  maxWidth?: boolean;
  maxHeight?: boolean;
  onClick?: () => void;
}

export const Column = (props: ColumnProps) => {
  const {
    children,
    alignItems,
    justifyContents,
    gap,
    maxWidth,
    maxHeight,
    className,
    onClick,
    "data-testid": testId = "Column",
    ...otherProps
  } = props;

  return (
    <Flex
      data-testid={testId}
      direction="column"
      alignItems={alignItems}
      justifyContents={justifyContents}
      gap={gap}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      className={className}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </Flex>
  );
};
