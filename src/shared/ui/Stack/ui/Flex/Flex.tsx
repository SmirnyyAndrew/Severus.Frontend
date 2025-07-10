import { ReactNode } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { AlignItems, FlexDirections, GapSizes, JustifyContents } from "../..";
import { AlignItemsStyles } from "../../model/types/alignItems/AlignItemsStyles";
import { FlexDirectionsStyles } from "../../model/types/flexDirections/FlexDirectionsStyles";
import { GapStyles } from "../../model/types/gapSizes/GapStyles";
import { JustifyContentsStyles } from "../../model/types/justifyContents/JustifyContentsStyles";
import cls from "./Flex.module.scss";

interface FlexProps {
  children: ReactNode;
  direction: FlexDirections;
  className?: string;
  alignItems?: AlignItems;
  justifyContents?: JustifyContents;
  gap?: GapSizes;
  maxWidth?: boolean;
  maxHeight?: boolean;
}
export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    direction,
    justifyContents = "start",
    alignItems = "center",
    gap = "8",
    maxWidth = true,
    maxHeight = false,
  } = props;

  const mods: Mods = {
    [cls.maxWidth]: maxWidth,
    [cls.maxHeight]: maxHeight,
  };

  return (
    <div
      className={classNames(cls.Flex, mods, [
        className,
        cls[JustifyContentsStyles[justifyContents]],
        cls[AlignItemsStyles[alignItems]],
        cls[GapStyles[gap]],
        cls[FlexDirectionsStyles[direction]],
      ])}
    >
      {children}
    </div>
  );
};
