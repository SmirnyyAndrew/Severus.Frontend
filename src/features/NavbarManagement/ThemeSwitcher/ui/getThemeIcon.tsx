import { Theme } from "app/providers/ThemeProvider";
import { ReactNode } from "react";
import CuteIcon from "shared/assets/icons/theme/theme-cute.svg";
import DarkIcon from "shared/assets/icons/theme/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme/theme-light.svg";

export const getThemeIcon = (currentTheme: Theme): ReactNode => {
  switch (currentTheme) {
    case Theme.LIGHT:
      return <LightIcon />;
    case Theme.DARK:
      return <DarkIcon />;
    case Theme.CUTE:
      return <CuteIcon />;
    default:
      return <DarkIcon />;
  }
};
