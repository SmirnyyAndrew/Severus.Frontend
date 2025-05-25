import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { LoginModal } from "features/AuthByUsername/ui/LoginModal/LoginModal";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { authData, logout } = useUserAuth();

  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isShownAuthModal, setIsShownAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsShownAuthModal(false);
    navigate(RoutePath.main);
  }, []);

  const onShowModal = useCallback(() => {
    setIsShownAuthModal(true);
  }, []);

  const onLogout = () => {
    logout();
    onCloseModal();
  };

  if (authData) {
    return (
      <div className={classNames(cls.navbar)}>
        <div className={cls.links}>
          <AppLink to={RoutePath.main} linkTheme={AppLinkTheme.PRIMARY}>
            {t("nav_main_page")}
          </AppLink>
          <AppLink to={RoutePath.profile} linkTheme={AppLinkTheme.PRIMARY}>
            {t("nav_profile_page")}
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
        <AppLink to={RoutePath.main} linkTheme={AppLinkTheme.PRIMARY}>
          {t("nav_main_page")}
        </AppLink>
        <AppLink to={RoutePath.about} linkTheme={AppLinkTheme.PRIMARY}>
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

      {isShownAuthModal && (
        <LoginModal isOpen={isShownAuthModal} onClose={onCloseModal} />
      )}
    </div>
  );
});
