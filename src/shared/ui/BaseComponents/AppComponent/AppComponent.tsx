import { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/lib/hooks/useTheme/useTheme";

interface AppComponentProps {
  children: ReactNode;
}

export const AppComponent = (props: AppComponentProps) => {
  const { children } = props;
  const { theme } = useTheme();

  return <div className={classNames("app", {}, [theme])}>{children}</div>;
};
