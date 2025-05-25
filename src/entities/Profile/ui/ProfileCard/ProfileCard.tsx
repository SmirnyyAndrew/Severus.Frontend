import { useProfile } from "entities/Profile/model/hooks/useProfile";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui/Loader/Loader";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { profileData, isLoading, error, getProfileDataFromDB } = useProfile();
  const { t } = useTranslation();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={classNames(cls.card)}>
        <img src={profileData?.avatar} alt="Avatar" className={cls.avatar} />
        <h2 className={cls.name}>{profileData?.name}</h2>
        <p className={cls.username}>
          {t("profile_card_username")}: {profileData?.username}
        </p>
        <p className={cls.location}>
          {t("profile_card_country")}: {profileData?.location}
        </p>
        <p className={cls.age}>
          {t("profile_card_age")}: {profileData?.age}
        </p>
        <p className={cls.gender}>
          {t("profile_card_gender")}: {profileData?.gender}
        </p>
      </div>
    </div>
  );
};
