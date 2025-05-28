import { Profile, profileReducer, useProfile } from "entities/Profile";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Button } from "shared/ui/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextThemes } from "shared/ui/Text/Text";
import cls from "./EditProfileDataForm.module.scss";

export interface EditProfileDataFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const tranlsations = {
  INCORRECT_AGE: "INCORRECT_AGE",
  INCORRECT_AVATAR: "INCORRECT_AVATAR",
  INCORRECT_GENDER: "INCORRECT_GENDER",
  INCORRECT_LOCATION: "INCORRECT_LOCATION",
  INCORRECT_NAME: "INCORRECT_NAME",
  INCORRECT_USERNAME: "INCORRECT_USERNAME",
  NO_DATA: "NO_DATA",
  SERVER_ERROR: "SERVER_ERROR",
};

const EditProfileDataForm = (props: EditProfileDataFormProps) => {
  const { t } = useTranslation("profile");
  const { onSuccess, className } = props;

  const {
    profileData,
    isLoading,
    validationErrors,
    putProfileDataIntoDB,
    setName,
    setUsername,
    setLocation,
    setAge,
    setGender,
    setAvatar,
  } = useProfile();

  const onChangeUsername = useCallback((username: string) => {
    setUsername(username);
  }, []);

  const onChangeName = useCallback((name: string) => {
    setName(name);
  }, []);

  const onChangeLocation = useCallback((location: string) => {
    setLocation(location);
  }, []);

  const onChangeAge = useCallback((age: string) => {
    setAge(age);
  }, []);

  const onChangeGender = useCallback((gender: string) => {
    setGender(gender);
  }, []);

  const onChangeAvatar = useCallback((avatar: string) => {
    setAvatar(avatar);
  }, []);

  const onEditClick = useCallback(async () => {
    if (__IS_STORYBOOK__) return;

    const profile: Profile = {
      id: profileData?.id || "",
      username: profileData?.username || "",
      name: profileData?.name || "",
      location: profileData?.location || "",
      age: profileData?.age || "",
      gender: profileData?.gender || "",
      avatar: profileData?.avatar || "",
    };

    await putProfileDataIntoDB(profile);

    if (validationErrors?.length === 0) onSuccess();
  }, [profileData]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.EditProfileDataForm, {}, [className])}>
        {validationErrors?.length &&
          validationErrors.map((err) => (
            <Text isCenter key={err} textTheme={TextThemes.ERROR}>
              {t(tranlsations[err])}
            </Text>
          ))}

        <Input
          autofocus
          placeholder={t("profile_data_editor_new_username")}
          value={profileData?.username}
          onChange={onChangeUsername}
          type="text"
          className={cls.input}
        />

        <Input
          placeholder={t("profile_data_editor_new_name")}
          value={profileData?.name}
          onChange={onChangeName}
          type="text"
          className={cls.input}
        />

        <Input
          placeholder={t("profile_data_editor_new_location")}
          value={profileData?.location}
          onChange={onChangeLocation}
          type="text"
          className={cls.input}
        />

        <Input
          placeholder={t("profile_data_editor_new_age")}
          value={profileData?.age}
          onChange={onChangeAge}
          type="text"
          className={cls.input}
        />

        <Input
          placeholder={t("profile_data_editor_gender")}
          value={profileData?.gender}
          onChange={onChangeGender}
          type="text"
          className={cls.input}
        />

        <Input
          placeholder={t("profile_data_editor_avatar_url")}
          value={profileData?.avatar}
          onChange={onChangeAvatar}
          type="text"
          className={cls.input}
        />

        <Button
          buttonTheme={ButtonTheme.OUTLINE}
          onClick={onEditClick}
          className={cls.loginBtn}
          disabled={isLoading}
          size={ButtonSize.S}
        >
          {t("profile_data_editor_btn_to_edit")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(EditProfileDataForm);
