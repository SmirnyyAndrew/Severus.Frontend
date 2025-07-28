import { getNextTheme } from "features/NavbarManagement/ThemeSwitcher";
import { useContext } from "react";
import { Theme } from "../../../../app/providers/ThemeProvider/lib/Theme";
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from "../../../../app/providers/ThemeProvider/lib/ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    let newTheme: Theme = getNextTheme(theme);
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
