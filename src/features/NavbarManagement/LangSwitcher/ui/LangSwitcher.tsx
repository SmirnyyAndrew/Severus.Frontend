import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import BritishFlag from "shared/assets/icons/menu/langs/british-flag.svg";
import RussianFlag from "shared/assets/icons/menu/langs/russian-flag.svg";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";

interface LangSwitcherProps {
  className?: string;
  isShort?: boolean;
  isFlag?: boolean;
}

export const LangSwitcher = memo(
  ({ className, isShort, isFlag = true }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const [isFlagView, setIsFlagView] = useState(isFlag);

    const toggleLang = () => {
      i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
      isShort = !isShort;
    };

    const flag = i18n.language === "ru" ? <RussianFlag /> : <BritishFlag />;

    const printLangView = () => {
      if (isFlagView) return flag;

      return isShort ? t("translate_btn") : t("short_translate_btn");
    };

    return (
      <Button
        buttonTheme={ButtonTheme.CLEAR}
        className={className}
        onClick={toggleLang}
        onContextMenuCapture={(e) => {
          e.preventDefault();
          setIsFlagView((prev) => !prev);
        }}
      >
        {printLangView()}
      </Button>
    );
  }
);
