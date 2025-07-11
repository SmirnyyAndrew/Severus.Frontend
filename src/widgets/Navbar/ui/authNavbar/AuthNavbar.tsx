import { useProfile } from "entities/Profile";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { t } from "i18next";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { errorUserAvatar } from "shared/const/plugFiles";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Avatar, AvatarSize } from "shared/ui/Avatar";
import { Dropdown, DropdownItem } from "shared/ui/Dropdown";
import { Row } from "shared/ui/Stack";

interface AuthNavbarProps {
  className?: string;
  onLogout: () => void;
}

export const AuthNavbar = (props: AuthNavbarProps) => {
  const { className, onLogout } = props;
  const { profileData } = useProfile();
  const { authData } = useUserAuth();

  const dropdownItems: DropdownItem[] = [
    {
      content: "Профиль",
      href: `${RoutePath.profile}${authData?.id}`,
    },
    {
      content: "Выйти",
      onClick: onLogout,
    },
  ];

  const avatar = (
    <Avatar
      isRound
      size={AvatarSize.S}
      img={profileData?.avatar ?? errorUserAvatar}
    />
  );

  return (
    <header className={className}>
      <Row alignItems="center" maxWidth justifyContents="center" gap="64">
        <AppLink to={RoutePath.main} linkTheme={AppLinkTheme.PRIMARY}>
          {t("nav_main_page")}
        </AppLink>
        <AppLink
          to={`${RoutePath.profile}${authData?.id ?? ""}`}
          linkTheme={AppLinkTheme.PRIMARY}
        >
          {t("nav_profile_page")}
        </AppLink>
        <AppLink to={RoutePath.articles} linkTheme={AppLinkTheme.PRIMARY}>
          {t("nav_articles_page")}
        </AppLink>
      </Row>

      <Dropdown
        direction="bottom left"
        items={dropdownItems}
        trigger={avatar}
      />
    </header>
  );
};
