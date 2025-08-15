import { Text, TextSize } from "shared/ui/Text";
import { Page } from "widgets/Page";
import * as cls from "./AdminPanelPage.module.scss";

const AdminPanelPage = () => {
  // const { t } = useTranslation();

  return (
    <Page data-testid="AdminPanelPage" className={cls.AdminPanelPage}>
      <Text size={TextSize.L} text={"Панель админа"} />
    </Page>
  );
};

export default AdminPanelPage;
