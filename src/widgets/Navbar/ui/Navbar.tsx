import { useProfile } from "entities/Profile";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { LoginModal } from "features/AuthManagement/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { AuthNavbar } from "./authNavbar/AuthNavbar";
import cls from "./Navbar.module.scss";
import { UnAuthNavbar } from "./unAuthNavbar/UnAuthNavbar";

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
    return <AuthNavbar className={cls.navbar} onLogout={onLogout} />;
  }

  return (
    <div>
      <UnAuthNavbar onShowModal={onShowModal} className={cls.navbar} />
      {isShownAuthModal && (
        <LoginModal isOpen={isShownAuthModal} onClose={onCloseModal} />
      )}
    </div>
  );
});
