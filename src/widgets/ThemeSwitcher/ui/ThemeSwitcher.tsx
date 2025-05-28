import { useTheme } from "app/providers/ThemeProvider";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import cls from "./ThemeSwitcher.module.scss";
import { getNextTheme } from "./getNextTheme";
import { getThemeIcon } from "./getThemeIcon";
interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  let newTheme = getNextTheme(theme);

  return (
    <Button
      buttonTheme={ButtonTheme.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {getThemeIcon(theme)}
    </Button>
  );
});
