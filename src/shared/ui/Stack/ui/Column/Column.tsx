import { ReactNode } from "react";
import { AlignItems, GapSizes, JustifyContents } from "../..";
import { Flex } from "../Flex/Flex";

interface ColumnProps {
  children: ReactNode;
  alignItems?: AlignItems;
  justifyContents?: JustifyContents;
  gap?: GapSizes;
  maxWidth?: boolean;
  maxHeight?: boolean;
}

export const Column = (props: ColumnProps) => {
  const { children, alignItems, justifyContents, gap, maxWidth, maxHeight } =
    props;

  return (
    <Flex
      direction="column"
      alignItems={alignItems}
      justifyContents={justifyContents}
      gap={gap}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
    >
      {children}
    </Flex>
  );
};
