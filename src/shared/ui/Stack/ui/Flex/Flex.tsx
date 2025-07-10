import { ReactNode } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { AlignItems, GapSizes, JustifyContents } from "../..";
import { AlignItemsStyles } from "../../model/types/alignItems/AlignItemsStyles";
import { GapStyles } from "../../model/types/gapSizes/GapStyles";
import { JustifyContentsStyles } from "../../model/types/justifyContents/JustifyContentsStyles";
import cls from "./Flex.module.scss";

interface FlexProps {
  children: ReactNode;
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
      ])}
    >
      {children}
    </div>
  );
};
