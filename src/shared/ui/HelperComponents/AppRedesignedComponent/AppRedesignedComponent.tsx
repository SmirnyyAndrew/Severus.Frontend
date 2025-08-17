import { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/lib/hooks/useTheme/useTheme";

interface AppRedesignedComponentProps {
  children: ReactNode;
}

export const AppRedesignedComponent = (props: AppRedesignedComponentProps) => {
  const { children } = props;
  const { theme } = useTheme();

  return (
    <div className={classNames("app_redesigned", {}, [theme])}>{children}</div>
  );
};
