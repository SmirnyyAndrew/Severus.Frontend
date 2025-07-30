import { HTMLAttributes, ReactNode } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { AlignItems, FlexDirections, GapSizes, JustifyContents } from "../..";
import { AlignItemsStyles } from "../../model/types/alignItems/AlignItemsStyles";
import { FlexDirectionsStyles } from "../../model/types/flexDirections/FlexDirectionsStyles";
import { GapStyles } from "../../model/types/gapSizes/GapStyles";
import { JustifyContentsStyles } from "../../model/types/justifyContents/JustifyContentsStyles";
import * as cls from "./Flex.module.scss";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  direction: FlexDirections;
  className?: string;
  alignItems?: AlignItems;
  justifyContents?: JustifyContents;
  gap?: GapSizes;
  maxWidth?: boolean;
  maxHeight?: boolean;
  onClick?: () => void;
  "data-testid"?: string;
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
    onClick,
    "data-testid": testId = Flex.name,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.maxWidth]: maxWidth,
    [cls.maxHeight]: maxHeight,
  };

  return (
    <div
      data-testid={testId}
      onClick={onClick}
      className={classNames(cls.Flex, mods, [
        className,
        cls[JustifyContentsStyles[justifyContents]],
        cls[AlignItemsStyles[alignItems]],
        cls[GapStyles[gap]],
        cls[FlexDirectionsStyles[direction]],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
