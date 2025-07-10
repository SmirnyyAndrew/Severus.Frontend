import { ProfileCard, profileReducer, useProfile } from "entities/Profile";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { EditProfileDataModal } from "features/ProfileManagement/EditProfileData";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { Column } from "shared/ui/Stack";
import { Page } from "widgets/Page";
import cls from "./ProfilePage.module.scss";

const ProfilePage = () => {
  const { profileData, isLoading, error, getProfileDataFromDB } = useProfile();
  const { t } = useTranslation("profile");
  const { id } = useParams();
  const { authData } = useUserAuth();

  useEffect(() => {
    getProfileDataFromDB(id);
  }, []);

  const reducers: ReducersList = {
    profile: profileReducer,
  };

  const [isShownProfileDataEditModal, setShownProfileDataEditModal] =
    useState(false);

  const onEditProfileClick = () => {
    setShownProfileDataEditModal(true);
  };

  const onCloseProfileDataEditModal = () => {
    setShownProfileDataEditModal(false);
  };
  const onSuccessProfileDataEditModal = () => {
    onCloseProfileDataEditModal();
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page className={cls.ProfilePage}>
        <Column gap="16">
          <ProfileCard
            profile={profileData}
            error={error}
            isLoading={isLoading}
          />

          {authData?.id === id && (
            <Button
              buttonTheme={ButtonTheme.BACKGROUND_INVERTED}
              onClick={onEditProfileClick}
            >
              {t("profile_data_editor_btn_to_edit")}
            </Button>
          )}

          {isShownProfileDataEditModal && (
            <EditProfileDataModal
              isOpen={isShownProfileDataEditModal}
              onClose={onCloseProfileDataEditModal}
            />
          )}
        </Column>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
