import { Profile } from "entities/Profile/model/types/Profile";
import { useTranslation } from "react-i18next";
import { errorUserAvatar } from "shared/const/plugFiles";
import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui/Loader/Loader";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  profile?: Profile;
  isLoading?: boolean;
  error?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { error, isLoading, profile, className } = props;

  const { t } = useTranslation("profile");
  const errorPhoto = errorUserAvatar;

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={classNames(cls.card)}>
        <img
          src={profile?.avatar ?? errorPhoto}
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
      </div>
    </div>
  );
};
