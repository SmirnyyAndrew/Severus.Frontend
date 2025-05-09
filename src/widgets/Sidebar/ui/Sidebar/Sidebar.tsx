import { useState } from "react";
import { useTranslation } from "react-i18next";
import AboutIcon from "shared/assets/icons/menu/about_page.svg";
import MainIcon from "shared/assets/icons/menu/main_page.svg";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button } from "shared/ui/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const onToggle = () => {
    setHidden((hidden) => !hidden);
  };

  const { t } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.hidden]: hidden }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        className={classNames(cls.hiddenBtn)}
        buttonTheme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
        onClick={onToggle}
      >
        {hidden ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        <AppLink
          className={cls.item}
          to={RoutePath.main}
          linkTheme={AppLinkTheme.PRIMARY}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t("nav_main_page")}</span>
        </AppLink>
        <AppLink
          className={cls.item}
          to={RoutePath.about}
          linkTheme={AppLinkTheme.PRIMARY}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t("nav_about_page")}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={!hidden} className={cls.lang} />
      </div>
    </div>
  );
};
