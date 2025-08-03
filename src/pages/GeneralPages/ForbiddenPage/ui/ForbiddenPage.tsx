import { useTranslation } from "react-i18next";
import { Text, TextSize } from "shared/ui/Text";
import { Page } from "widgets/Page";
import * as cls from "./ForbiddenPage.module.scss";

const ForbiddenPage = () => {
  const { t } = useTranslation();

  return (
    <Page data-testid="ForbiddenPage" className={cls.ForbiddenPage}>
      <Text size={TextSize.XL} text={"Страница недоступна"} />
    </Page>
  );
};

export default ForbiddenPage;
