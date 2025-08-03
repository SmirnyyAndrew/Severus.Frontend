import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Text, TextSize } from "shared/ui/Text";
import { Page } from "widgets/Page";

const AboutPage = memo(() => {
  const { t } = useTranslation("about");

  return (
    <Page data-testid={"AboutPage"}>
      <Text position="start" size={TextSize.L} text={t("about_page")} />
    </Page>
  );
});

export default AboutPage;
