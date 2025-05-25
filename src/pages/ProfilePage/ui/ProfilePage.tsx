import { ProfileCard, profileReducer, useProfile } from "entities/Profile";
import { memo, useEffect } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const ProfilePage = memo(() => {
  const { profileData, isLoading, error, getProfileDataFromDB } = useProfile();

  useEffect(() => {
    if (!__IS_STORYBOOK__) getProfileDataFromDB();
  }, []);

  const reducers: ReducersList = {
    profile: profileReducer,
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <ProfileCard profile={profileData} error={error} isLoading={isLoading} />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
