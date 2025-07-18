import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  MAIN = "main",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  linkTheme?: AppLinkTheme;
  children?: ReactNode;
  target?: HTMLAttributeAnchorTarget;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    className,
    linkTheme = AppLinkTheme.PRIMARY,
    children,
    to,
    target = "_top",
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames("", {}, [className, cls[linkTheme]])}
      target={target}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
