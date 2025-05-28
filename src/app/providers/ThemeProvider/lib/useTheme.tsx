import { useContext } from "react";
import { getNextTheme } from "widgets/ThemeSwitcher";
import { Theme } from "./Theme";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";

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
