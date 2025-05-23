import { profileReducer, useProfile } from "entities/Profile";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const ProfilePage = memo(() => {
  const navigate = useNavigate();
  const { profileData } = useProfile();

  if (!profileData) {
    navigate(RoutePath.main);
    return <></>;
  }
  const reducers: ReducersList = {
    profile: profileReducer,
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <ul>
          <li>Id: {profileData.id}</li>
          <li>Имя: {profileData.name}</li>
          <li>Возраст: {profileData.age}</li>
          <li>Пол: {profileData.gender}</li>
          <li>Адрес: {profileData.location}</li>
          <li>Аватар: {profileData.avatar}</li>
        </ul>
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
