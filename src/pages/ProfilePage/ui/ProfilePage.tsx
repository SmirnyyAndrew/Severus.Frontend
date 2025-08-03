import { ProfileCard, profileReducer } from "entities/Profile";
import { EditProfileDataModal } from "features/ProfileManagement/EditProfileData";
import { EditProfileDataButton } from "features/ProfileManagement/EditProfileData/ui/EditProfileDataButton/EditProfileDataButton";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Column } from "shared/ui/Stack";
import { Page } from "widgets/Page";
import * as cls from "./ProfilePage.module.scss";

const ProfilePage = () => {
  const { id } = useParams();

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

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page data-testid="ProfilePage" className={cls.ProfilePage}>
        <Column gap="16">
          <ProfileCard />
          <EditProfileDataButton id={id} onEditClick={onEditProfileClick} />

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
