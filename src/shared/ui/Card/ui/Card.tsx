import { HTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { TestProps } from "shared/types/tests/testProps";
import * as cls from "./Card.module.scss";

export enum CardTheme {
  NORMAL = "noraml",
  OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement>, TestProps {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    "data-testid": testid = "Card",
    ...otherProps
  } = props;

  return (
    <div
      data-testid={testid}
      className={classNames(cls.Card, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
