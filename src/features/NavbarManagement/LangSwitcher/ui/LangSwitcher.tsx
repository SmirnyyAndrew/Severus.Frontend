import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BritishFlag from "shared/assets/icons/menu/langs/british-flag.svg";
import RussianFlag from "shared/assets/icons/menu/langs/russian-flag.svg";
import { SET_LANG_DEBOUNCE } from "shared/const/delays";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { JsonSettings } from "shared/types/JsonSettings";
import { Langs } from "shared/types/lang/Langs";
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

    const jsonSettings = useUserAuth()?.authData?.jsonSettings;
    const { updateJsonSettings } = useUserAuth();

    useEffect(() => {
      i18n.changeLanguage((jsonSettings?.language as Langs) ?? Langs.ru);
    }, [i18n, jsonSettings]);

    const toggleLang = useDebounce(async () => {
      const newLang = jsonSettings?.language === Langs.ru ? Langs.en : Langs.ru;
      i18n.changeLanguage(newLang);

      const newUserJsonSettings: JsonSettings = {
        ...jsonSettings,
        language: newLang,
      };

      await updateJsonSettings(newUserJsonSettings);

      isShort = !isShort;
    }, SET_LANG_DEBOUNCE);

    const flag = i18n.language === Langs.ru ? <RussianFlag /> : <BritishFlag />;

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
