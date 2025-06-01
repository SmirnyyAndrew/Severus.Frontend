import { memo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextThemes {
  "INFO" = "info",
  "WARNING" = "warning",
  "ERROR" = "error",
}

export enum TextSize {
  XS = "size_xs",
  S = "size_s",
  L = "size_l",
  XL = "size_xl",
}

interface TextProps {
  className?: string;
  textTheme?: TextThemes;
  title?: string;
  text: string;
  isCenter?: boolean;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    textTheme = TextThemes.INFO,
    isCenter = true,
    size = TextSize.L,
  } = props;

  const mods: Mods = {
    [cls.center]: isCenter,
  };

  return (
    <div
      className={classNames(cls.Text, mods, [
        className,
        cls[textTheme],
        cls[size],
      ])}
    >
      {title && <p className={classNames(cls.title)}> {title}</p>}
      <p className={classNames(cls.text)}> {text}</p>
    </div>
  );
});
