import { memo } from "react";

const ProfilePage = memo(() => {
  // const { profileData } = useProfile();

  // const reducers: ReducersList = {
  //   profile: profileReducer,
  // };

  // return (
  //   <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
  //     <div>
  //       <ul>
  //         <li>Id: {profileData?.id ?? "-"}</li>
  //         <li>Имя: {profileData?.name ?? "-"}</li>
  //         <li>Возраст: {profileData?.age ?? "-"}</li>
  //         <li>Пол: {profileData?.gender ?? "-"}</li>
  //         <li>Адрес: {profileData?.location ?? "-"}</li>
  //         <li>Аватар: {profileData?.avatar ?? "-"}</li>
  //       </ul>
  //     </div>
  //   </DynamicModuleLoader>
  // );

  return <h1>Hello</h1>;
});

export default ProfilePage;
