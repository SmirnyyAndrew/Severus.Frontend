import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background_inverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  buttonTheme?: ButtonTheme;
  size?: ButtonSize;
  square?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, buttonTheme, square, size, children, ...otherProps } =
    props;

  const mods: Record<string, boolean> = {
    [cls[buttonTheme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [
        className,
        cls[buttonTheme],
        size,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
