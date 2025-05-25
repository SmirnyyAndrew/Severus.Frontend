import { ProfileCard, profileReducer, useProfile } from "entities/Profile";
import { memo, useEffect } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const ProfilePage = memo(() => {
  const { getProfileDataFromDB } = useProfile();

  useEffect(() => {
    getProfileDataFromDB();
  }, []);

  const reducers: ReducersList = {
    profile: profileReducer,
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <ProfileCard />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
