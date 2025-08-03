import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { TestProps } from "shared/types/tests/testProps";
import * as cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  MAIN = "main",
}

interface AppLinkProps extends LinkProps, TestProps {
  className?: string;
  linkTheme?: AppLinkTheme;
  children?: ReactNode;
  target?: HTMLAttributeAnchorTarget;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    className,
    children,
    to,
    "data-testid": testId = "AppLink",
    linkTheme = AppLinkTheme.PRIMARY,
    target = "_top",
    ...otherProps
  } = props;

  return (
    <Link
      data-testid={testId}
      to={to}
      className={classNames("", {}, [className, cls[linkTheme]])}
      target={target}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
