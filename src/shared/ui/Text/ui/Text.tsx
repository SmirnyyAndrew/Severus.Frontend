import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AlignItems, Column, GapSizes } from "shared/ui/Stack";
import { HeaderTags } from "../model/types/headerTags/HeaderTags";
import { MapSizeToHeaderTag } from "../model/types/headerTags/MapSizeToHeaderTag";
import { TextSize } from "../model/types/TextSize";
import { TextThemes } from "../model/types/TextThemes";
import * as cls from "./Text.module.scss";

interface TextProps {
  className?: string;
  textTheme?: TextThemes;
  title?: string;
  text: string;
  size?: TextSize;
  gap?: GapSizes;
  position?: AlignItems;
  onClick?: () => void;
}
export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    gap,
    position = "center",
    textTheme = TextThemes.INFO,
    size = TextSize.L,
    onClick,
  } = props;

  const HeaderTag: HeaderTags = MapSizeToHeaderTag[size];

  return (
    <div>
      <Column
        alignItems={position}
        gap={gap}
        className={classNames("", {}, [className, cls[textTheme], cls[size]])}
        onClick={onClick}
      >
        {title && (
          <HeaderTag className={classNames(cls.title)}> {title}</HeaderTag>
        )}
        <p className={classNames(cls.text)}> {text}</p>
      </Column>
    </div>
  );
});
