import { profileReducer, useProfile } from "entities/Profile";
import { memo, useEffect } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Loader } from "shared/ui/Loader/Loader";

const ProfilePage = memo(() => {
  const { profileData, isLoading, error, getProfileDataFromDB } = useProfile();

  useEffect(() => {
    getProfileDataFromDB();
  }, []);

  const reducers: ReducersList = {
    profile: profileReducer,
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div>
        <ul>
          <li>Id: {profileData?.id ?? "-"}</li>
          <li>Имя: {profileData?.name ?? "-"}</li>
          <li>Возраст: {profileData?.age ?? "-"}</li>
          <li>Пол: {profileData?.gender ?? "-"}</li>
          <li>Адрес: {profileData?.location ?? "-"}</li>
          <li>Аватар: {profileData?.avatar ?? "-"}</li>
        </ul>
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
