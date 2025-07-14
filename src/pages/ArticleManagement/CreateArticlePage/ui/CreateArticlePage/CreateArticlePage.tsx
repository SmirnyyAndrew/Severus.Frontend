import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text";
import { Page } from "widgets/Page";
import cls from "./CreateArticlePage.module.scss";

interface CreateArticlePageProps {
  className?: string;
}

const CreateArticlePage = (props: CreateArticlePageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames(cls.CreateArticlePage, {}, [className])}>
      <Text size={TextSize.L} text={"Страница для создания статьи"} />
    </Page>
  );
};

export default CreateArticlePage;
