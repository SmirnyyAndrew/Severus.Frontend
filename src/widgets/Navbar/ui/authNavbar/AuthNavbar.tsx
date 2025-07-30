import { useProfile } from "entities/Profile";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { NotificationButton } from "features/NavbarManagement/NotificationButton";
import { t } from "i18next";
import { USER_AVATAR_ERROR } from "shared/const/plugFiles";
import { Routes } from "shared/const/router";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Avatar, AvatarSize } from "shared/ui/Avatar";
import { Dropdown, DropdownItem } from "shared/ui/Popups";
import { Row } from "shared/ui/Stack";

interface AuthNavbarProps {
  className?: string;
  onLogout: () => void;
  "data-testid"?: string;
}

export const AuthNavbar = (props: AuthNavbarProps) => {
  const {
    className,
    onLogout,
    "data-testid": testId = AuthNavbar.name,
  } = props;
  const { profileData } = useProfile();
  const { authData } = useUserAuth();
  const { isAdminOrManager } = useUserAuth();

  const dropdownItems: DropdownItem[] = [
    ...(isAdminOrManager
      ? [
          {
            content: "Admin panel",
            href: Routes.Admin.Panel(),
          },
        ]
      : []),
    {
      content: "Профиль",
      href: Routes.Profile.Info(authData?.id),
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
      img={profileData?.avatar ?? USER_AVATAR_ERROR}
    />
  );

  return (
    <header data-testid={testId} className={className}>
      <Row alignItems="center" maxWidth justifyContents="center" gap="64">
        <AppLink to={Routes.MainPages.Main()} linkTheme={AppLinkTheme.PRIMARY}>
          <>{t("nav_main_page")}</>
        </AppLink>
        <AppLink
          to={Routes.Profile.Info(authData?.id)}
          linkTheme={AppLinkTheme.PRIMARY}
        >
          <>{t("nav_profile_page")}</>
        </AppLink>
        <AppLink to={Routes.Article.All()} linkTheme={AppLinkTheme.PRIMARY}>
          <>{t("nav_articles_page")}</>
        </AppLink>
      </Row>

      <NotificationButton />

      <Dropdown
        direction="bottom left"
        items={dropdownItems}
        trigger={avatar}
      />
    </header>
  );
};
