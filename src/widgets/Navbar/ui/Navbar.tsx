import { useProfile } from "entities/Profile";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { LoginModal } from "features/AuthManagement/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { Row } from "shared/ui/Stack";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { authData, logout } = useUserAuth();
  const { setProfileDataUndefined } = useProfile();

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
    setProfileDataUndefined();
    logout();
    onCloseModal();
  };

  if (authData) {
    return (
      <header className={classNames(cls.navbar)}>
        <Row alignItems="center" maxWidth justifyContents="center" gap="64">
          <AppLink to={RoutePath.main} linkTheme={AppLinkTheme.PRIMARY}>
            {t("nav_main_page")}
          </AppLink>
          <AppLink
            to={`${RoutePath.profile}${authData?.id ?? ""}`}
            linkTheme={AppLinkTheme.PRIMARY}
          >
            {t("nav_profile_page")}
          </AppLink>
          <AppLink to={RoutePath.articles} linkTheme={AppLinkTheme.PRIMARY}>
            {t("nav_articles_page")}
          </AppLink>
        </Row>
        <Button
          className={cls.login}
          onClick={onLogout}
          buttonTheme={ButtonTheme.OUTLINE_INVERTED}
        >
          {t("logout")}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(cls.navbar)}>
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
    </header>
  );
});
