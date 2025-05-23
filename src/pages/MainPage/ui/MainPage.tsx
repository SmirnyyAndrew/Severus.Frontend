import { BugButton } from "app/providers/ErrorBoundary";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const MainPage = memo(() => {
  const { t } = useTranslation("main");

  return (
    <div>
      <h1>{t("main_page")}</h1>
      <br />
      <BugButton />
    </div>
  );
});

export default MainPage;
