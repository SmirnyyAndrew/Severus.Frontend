import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { Theme } from "../lib/Theme";
import { ThemeContext } from "../lib/ThemeContext";

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialTheme } = props;

  const userTheme: Theme = useUserAuth()?.authData?.jsonSettings
    ?.theme as Theme;
  const defaultTheme = userTheme || Theme.LIGHT;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  useEffect(() => {
    setTheme(userTheme);
  }, [userTheme]);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
