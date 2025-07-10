import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text";
import { Page } from "widgets/Page";
import cls from "./EditArticlePage.module.scss";

interface EditArticlePageProps {
  className?: string;
}

const EditArticlePage = (props: EditArticlePageProps) => {
  const { className } = props;
  const { id } = useParams();
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
