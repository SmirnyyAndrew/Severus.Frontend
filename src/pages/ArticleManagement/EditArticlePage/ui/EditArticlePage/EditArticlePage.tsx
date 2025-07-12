import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text";
import { Page } from "widgets/Page";
import cls from "./EditArticlePage.module.scss";

interface EditArticlePageProps {
  className?: string;
  id?: string | undefined;
}

const EditArticlePage = (props: EditArticlePageProps) => {
  const { className, id } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames(cls.EditArticlePage, {}, [className])}>
      <Text
        size={TextSize.L}
        text={`Страница для редактирования статьи №${id}`}
      />
    </Page>
  );
};

export default EditArticlePage;
