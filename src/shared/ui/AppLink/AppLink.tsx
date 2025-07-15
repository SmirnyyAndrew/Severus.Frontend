import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  MAIN = "main",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  linkTheme: AppLinkTheme;
  children: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    className,
    linkTheme = AppLinkTheme.PRIMARY,
    children,
    to,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      // className={classNames(cls.navbar, {}, [className, cls[linkTheme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
