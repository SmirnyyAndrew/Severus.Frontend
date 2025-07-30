import { ButtonHTMLAttributes, memo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import * as cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  OUTLINE_INVERTED = "outline_inverted",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background_inverted",
}

export enum ButtonSize {
  S = "size_s",
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  buttonTheme?: ButtonTheme;
  size?: ButtonSize;
  square?: boolean;
  disabled?: boolean;
  isWrapper?: boolean;
  "data-testid"?: string;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    disabled = false,
    buttonTheme = ButtonTheme.OUTLINE,
    square,
    isWrapper = false,
    size = ButtonSize.M,
    "data-testid": testid = Button.name,
    children,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls[buttonTheme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
    [cls.isWrapper]: isWrapper,
  };

  return (
    <button
      data-testid={testid}
      className={classNames(cls.Button, mods, [
        className,
        cls[buttonTheme],
        cls[size],
      ])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
