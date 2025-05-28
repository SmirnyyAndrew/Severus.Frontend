import { Theme } from "app/providers/ThemeProvider";

export const getNextTheme = (currentTheme?: Theme): Theme => {
  let newTheme: Theme;

  switch (currentTheme) {
    case Theme.DARK:
      newTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      newTheme = Theme.CUTE;
      break;
    case Theme.CUTE:
      newTheme = Theme.DARK;
      break;
    default:
      newTheme = Theme.DARK;
  }

  return newTheme;
};
