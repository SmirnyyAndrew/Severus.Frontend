import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { getNextTheme } from "features/NavbarManagement/ThemeSwitcher";
import { useContext } from "react";
import { SET_THEME_DEBOUNCE } from "shared/const/delays";
import { JsonSettings } from "shared/types/JsonSettings";
import { Theme } from "../../../../app/providers/ThemeProvider/lib/Theme";
import { ThemeContext } from "../../../../app/providers/ThemeProvider/lib/ThemeContext";
import { useDebounce } from "../useDebounce/useDebounce";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const { updateJsonSettings, authData } = useUserAuth();

  const toggleTheme = useDebounce(() => {
    let newTheme: Theme = getNextTheme(theme);
    setTheme?.(newTheme);

    let newJsonSettings: JsonSettings = {
      ...authData?.jsonSettings,
      theme: newTheme,
    };

    updateJsonSettings(newJsonSettings);
  }, SET_THEME_DEBOUNCE);

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
