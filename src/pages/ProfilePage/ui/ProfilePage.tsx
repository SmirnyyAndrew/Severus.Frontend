import { ProfileCard, profileReducer, useProfile } from "entities/Profile";
import { EditProfileDataModal } from "features/EditProfileData";
import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { UserProfileDataEditor } from "widgets/UserProfileDataEditor";
import cls from "./ProfilePage.module.scss";

const ProfilePage = memo(() => {
  const { profileData, isLoading, error, getProfileDataFromDB } = useProfile();
  const { t } = useTranslation("profile");

  useEffect(() => {
    if (!__IS_STORYBOOK__) getProfileDataFromDB();
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
      <div className={cls.ProfilePage}>
        <ProfileCard
          profile={profileData}
          error={error}
          isLoading={isLoading}
        />
        <UserProfileDataEditor />
        <Button
          buttonTheme={ButtonTheme.BACKGROUND_INVERTED}
          onClick={onEditProfileClick}
        >
          {t("profile_data_editor_btn_to_edit")}
        </Button>

        {isShownProfileDataEditModal && (
          <EditProfileDataModal
            isOpen={isShownProfileDataEditModal}
            onClose={onCloseProfileDataEditModal}
          />
        )}
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
