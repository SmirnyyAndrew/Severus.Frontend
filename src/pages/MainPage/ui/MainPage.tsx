import { BugButton } from "app/providers/ErrorBoundary";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";

const MainPage = memo(() => {
  const { t } = useTranslation("main");

  return (
    <Page>
      <h1>{t("main_page")}</h1>
      <br />
      <BugButton />
    </Page>
  );
});

export default MainPage;
