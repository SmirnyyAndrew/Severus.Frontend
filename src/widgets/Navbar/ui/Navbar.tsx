import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { LoginModal } from "features/AuthByUsername";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { authData, logout } = useUserAuth();

  const { t } = useTranslation();
  const [isShownAuthModal, setIsShownAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsShownAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsShownAuthModal(true);
  }, []);

  const onLogout = () => {
    logout();
    setIsShownAuthModal(false);
  };

  if (authData) {
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
        <Button
          className={cls.login}
          onClick={onLogout}
          buttonTheme={ButtonTheme.OUTLINE_INVERTED}
        >
          {t("logout")}
        </Button>
      </div>
    );
  }

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

      <Button
        className={cls.login}
        onClick={onShowModal}
        buttonTheme={ButtonTheme.OUTLINE_INVERTED}
      >
        {t("login")}
      </Button>
      <LoginModal isOpen={isShownAuthModal} onClose={onCloseModal} />
    </div>
  );
};
