import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text";
import cls from "./EditArticlePage.module.scss";

interface EditArticlePageProps {
  className?: string;
}

const EditArticlePage = (props: EditArticlePageProps) => {
  const { className } = props;
  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.EditArticlePage, {}, [className])}>
      <Text
        isCenter
        size={TextSize.L}
        text={`Страница для редактирования статьи №${id}`}
      />
    </div>
  );
};

export default EditArticlePage;
