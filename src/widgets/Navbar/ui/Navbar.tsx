import { profileReducer, useProfile } from "entities/Profile";
import { userReducer } from "entities/User";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { LoginModal } from "features/AuthManagement/AuthByUsername";
import { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Routes } from "shared/const/router";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { TestProps } from "shared/types/tests/testProps";
import { AuthNavbar } from "./authNavbar/AuthNavbar";
import * as cls from "./Navbar.module.scss";
import { UnAuthNavbar } from "./unAuthNavbar/UnAuthNavbar";

interface NavbarProps extends TestProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className, "data-testid": testId = "Navbar" } = props;
  const { authData, logout } = useUserAuth();
  const { profileData: profile, getProfileDataFromDB } = useProfile();
  const { setProfileDataUndefined } = useProfile();

  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isShownAuthModal, setIsShownAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsShownAuthModal(false);
    navigate(Routes.MainPages.Main());
  }, []);

  const onShowModal = useCallback(() => {
    setIsShownAuthModal(true);
  }, []);

  const onLogout = () => {
    setProfileDataUndefined();
    logout();
    onCloseModal();
  };

  const reducers: ReducersList = {
    user: userReducer,
    profile: profileReducer,
  };

  useEffect(() => {
    if (!profile) getProfileDataFromDB(authData?.id);
  }, []);

  if (authData) {
    return (
      <DynamicModuleLoader reducers={reducers}>
        <AuthNavbar
          data-testid={testId}
          className={cls.navbar}
          onLogout={onLogout}
        />
      </DynamicModuleLoader>
    );
  }

  return (
    <div>
      <UnAuthNavbar
        data-testid={testId}
        onShowModal={onShowModal}
        className={cls.navbar}
      />
      {isShownAuthModal && (
        <LoginModal isOpen={isShownAuthModal} onClose={onCloseModal} />
      )}
    </div>
  );
});
