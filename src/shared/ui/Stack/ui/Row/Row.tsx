import { ReactNode } from "react";
import { AlignItems } from "../../model/types/alignItems/AlignItems";
import { GapSizes } from "../../model/types/gapSizes/GapSizes";
import { JustifyContents } from "../../model/types/justifyContents/JustifyContents";
import { Flex } from "../Flex/Flex";

interface RowProps {
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
  } = props;

  return (
    <Flex
      direction="row"
      alignItems={alignItems}
      justifyContents={justifyContents}
      gap={gap}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      className={className}
      onClick={onClick}
    >
      {children}
    </Flex>
  );
};
