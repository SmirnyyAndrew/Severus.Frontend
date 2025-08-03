import { HTMLAttributes, ReactNode } from "react";
import { TestProps } from "shared/types/tests/testProps";
import { AlignItems } from "../../model/types/alignItems/AlignItems";
import { GapSizes } from "../../model/types/gapSizes/GapSizes";
import { JustifyContents } from "../../model/types/justifyContents/JustifyContents";
import { Flex } from "../Flex/Flex";

interface RowProps extends HTMLAttributes<HTMLDivElement>, TestProps {
  children: ReactNode;
  className?: string;
  alignItems?: AlignItems;
  justifyContents?: JustifyContents;
  gap?: GapSizes;
  maxWidth?: boolean;
  maxHeight?: boolean;
  onClick?: () => void;
}

export const Row = (props: RowProps) => {
  const {
    children,
    alignItems,
    justifyContents,
    gap,
    maxWidth,
    maxHeight,
    className,
    onClick,
    "data-testid": testId = "Row",
    ...otherProps
  } = props;

  return (
    <Flex
      data-testid={testId}
      direction="row"
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
