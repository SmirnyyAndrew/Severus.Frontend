import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({}: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.links}>
        <AppLink to={"/"} linkTheme={AppLinkTheme.PRIMARY}>
          {t("nav_main_page")}
        </AppLink>
        <AppLink to={"/about"} linkTheme={AppLinkTheme.PRIMARY}>
          {t("nav_about_page")}
        </AppLink>
      </div>
    </div>
  );
};
