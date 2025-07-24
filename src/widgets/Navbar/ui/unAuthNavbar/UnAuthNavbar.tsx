import { t } from "i18next";
import { RoutePath } from "shared/const/router";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { Row } from "shared/ui/Stack";

interface UnAuthNavbarProps {
  className?: string;
  onShowModal: () => void;
}

export const UnAuthNavbar = (props: UnAuthNavbarProps) => {
  const { className, onShowModal } = props;

  return (
    <header className={className}>
      <Row alignItems="center" maxWidth justifyContents="center" gap="64">
        <AppLink to={RoutePath.main} linkTheme={AppLinkTheme.PRIMARY}>
          <>{t("nav_main_page")}</>
        </AppLink>
        <AppLink to={RoutePath.about} linkTheme={AppLinkTheme.PRIMARY}>
          <>{t("nav_about_page")}</>
        </AppLink>
      </Row>

      <Button onClick={onShowModal} buttonTheme={ButtonTheme.OUTLINE_INVERTED}>
        <>{t("login")}</>
      </Button>
    </header>
  );
};
