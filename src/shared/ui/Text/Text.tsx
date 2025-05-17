import { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextThemes {
  "INFO" = "info",
  "WARNING" = "warning",
  "ERROR" = "error",
}

interface TextProps {
  className?: string;
  textTheme: TextThemes;
  children: ReactNode;
  isCenter?: boolean;
}

export const Text = (props: TextProps) => {
  const { className, textTheme, children, isCenter } = props;

  return (
    <p
      className={classNames(cls.Text, { [cls.center]: isCenter }, [
        className,
        cls[textTheme],
      ])}
    >
      {children}
    </p>
  );
};
