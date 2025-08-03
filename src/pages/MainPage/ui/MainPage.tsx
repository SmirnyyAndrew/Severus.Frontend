import { BugButton } from "app/providers/ErrorBoundary";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Column } from "shared/ui/Stack";
import { Text } from "shared/ui/Text";
import { Page } from "widgets/Page";

const MainPage = memo(() => {
  const { t } = useTranslation("main");

  return (
    <Page data-testid="MainPage">
      <Column gap="20" alignItems="start">
        <Text position="start" text={t("main_page")} />
        <BugButton />
      </Column>
    </Page>
  );
});

export default MainPage;
