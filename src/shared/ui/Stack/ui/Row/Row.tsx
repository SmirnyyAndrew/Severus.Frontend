import { ReactNode } from "react";
import { AlignItems, GapSizes, JustifyContents } from "../..";
import { Flex } from "../Flex/Flex";

interface RowProps {
  children: ReactNode;
  alignItems?: AlignItems;
  justifyContents?: JustifyContents;
  gap?: GapSizes;
  maxWidth?: boolean;
  maxHeight?: boolean;
}

export const Row = (props: RowProps) => {
  const { children, alignItems, justifyContents, gap, maxWidth, maxHeight } =
    props;

  return (
    <Flex
      direction="row"
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
