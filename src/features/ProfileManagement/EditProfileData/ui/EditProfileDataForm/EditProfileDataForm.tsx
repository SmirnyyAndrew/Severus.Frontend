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
import { Column } from "shared/ui/Stack";
import { TextThemes } from "shared/ui/Text/model/types/TextThemes";
import { Text } from "shared/ui/Text/ui/Text";
import * as cls from "./EditProfileDataForm.module.scss";

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

  const onChangeUsername = useCallback(
    (username: string) => {
      setUsername(username);
    },
    [setUsername]
  );

  const onChangeName = useCallback(
    (name: string) => {
      setName(name);
    },
    [setName]
  );

  const onChangeLocation = useCallback(
    (location: string) => {
      setLocation(location);
    },
    [setLocation]
  );

  const onChangeAge = useCallback(
    (age: string) => {
      setAge(age);
    },
    [setAge]
  );

  const onChangeGender = useCallback(
    (gender: string) => {
      setGender(gender);
    },
    [setGender]
  );

  const onChangeAvatar = useCallback(
    (avatar: string) => {
      setAvatar(avatar);
    },
    [setAvatar]
  );

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
  }, [
    onSuccess,
    profileData?.age,
    profileData?.avatar,
    profileData?.gender,
    profileData?.id,
    profileData?.location,
    profileData?.name,
    profileData?.username,
    putProfileDataIntoDB,
    validationErrors?.length,
  ]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Column
        data-testid="EditProfileDataForm"
        alignItems="start"
        justifyContents="start"
        gap="8"
        className={classNames(cls.EditProfileDataForm, {}, [className])}
      >
        {validationErrors?.length &&
          validationErrors.map((err) => (
            <Text
              text={t(tranlsations[err])}
              key={err}
              textTheme={TextThemes.ERROR}
            />
          ))}

        <Input
          autofocus
          placeholder={t("profile_data_editor_new_username")}
          value={profileData?.username}
          data-testid="EditModalUsernameInput"
          onChange={onChangeUsername}
          type="text"
          className={cls.input}
        />

        <Input
          placeholder={t("profile_data_editor_new_name")}
          value={profileData?.name}
          data-testid="EditModalNameInput"
          onChange={onChangeName}
          type="text"
          className={cls.input}
        />

        <Input
          placeholder={t("profile_data_editor_new_location")}
          value={profileData?.location}
          data-testid="EditModalLocationInput"
          onChange={onChangeLocation}
          type="text"
          className={cls.input}
        />

        <Input
          placeholder={t("profile_data_editor_new_age")}
          value={profileData?.age}
          data-testid="EditModalAgeInput"
          onChange={onChangeAge}
          type="text"
          className={cls.input}
        />

        <Input
          placeholder={t("profile_data_editor_gender")}
          value={profileData?.gender}
          data-testid="EditModalGenderInput"
          onChange={onChangeGender}
          type="text"
          className={cls.input}
        />

        <Input
          placeholder={t("profile_data_editor_avatar_url")}
          value={profileData?.avatar}
          data-testid="EditModalAvatarInput"
          onChange={onChangeAvatar}
          type="text"
          className={cls.input}
        />

        <Button
          data-testid="ModalEditProfileButton"
          buttonTheme={ButtonTheme.OUTLINE}
          onClick={onEditClick}
          className={cls.loginBtn}
          disabled={isLoading}
          size={ButtonSize.S}
        >
          {t("profile_data_editor_btn_to_edit")}
        </Button>
      </Column>
    </DynamicModuleLoader>
  );
};

export default memo(EditProfileDataForm);
