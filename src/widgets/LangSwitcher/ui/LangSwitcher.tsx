import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    short = !short;
  };

  return (
    <Button
      buttonTheme={ButtonTheme.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={toggleLang}
    >
      {short ? t("translate_btn") : t("short_translate_btn")}
    </Button>
  );
});
