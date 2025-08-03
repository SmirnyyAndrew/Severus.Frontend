import { t } from "i18next";
import { Routes } from "shared/const/router";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { Row } from "shared/ui/Stack";

interface UnAuthNavbarProps {
  className?: string;
  onShowModal: () => void;
  "data-testid"?: string;
}

export const UnAuthNavbar = (props: UnAuthNavbarProps) => {
  const {
    className,
    onShowModal,
    "data-testid": testId = "UnAuthNavbar",
  } = props;

  return (
    <header data-testid={testId} className={className}>
      <Row alignItems="center" maxWidth justifyContents="center" gap="64">
        <AppLink to={Routes.MainPages.Main()} linkTheme={AppLinkTheme.PRIMARY}>
          <>{t("nav_main_page")}</>
        </AppLink>
        <AppLink to={Routes.MainPages.About()} linkTheme={AppLinkTheme.PRIMARY}>
          <>{t("nav_about_page")}</>
        </AppLink>
      </Row>

      <Button onClick={onShowModal} buttonTheme={ButtonTheme.OUTLINE_INVERTED}>
        <>{t("login")}</>
      </Button>
    </header>
  );
};
