import { useProfile } from "entities/Profile";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { USER_AVATAR_ERROR } from "shared/const/plugFiles";
import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui/Loader/Loader";
import { Column } from "shared/ui/Stack";
import * as cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props;

  const { t } = useTranslation("profile");

  const {
    profileData: profile,
    isLoading,
    error,
    getProfileDataFromDB,
  } = useProfile();

  const { authData } = useUserAuth();

  useEffect(() => {
    if (!profile) getProfileDataFromDB(authData?.id);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Column
      data-testid="ProfileCard"
      alignItems="center"
      justifyContents="center"
      gap="4"
      className={classNames(cls.card)}
    >
      <img
        src={profile?.avatar ?? USER_AVATAR_ERROR}
        alt="Avatar"
        className={cls.avatar}
      />
      <h2 className={cls.name}>{profile?.name}</h2>
      <p className={cls.username}>
        {t("profile_card_username")}: {profile?.username}
      </p>
      <p className={cls.location}>
        {t("profile_card_country")}: {profile?.location}
      </p>
      <p className={cls.age}>
        {t("profile_card_age")}: {profile?.age}
      </p>
      <p className={cls.gender}>
        {t("profile_card_gender")}: {profile?.gender}
      </p>
    </Column>
  );
};
