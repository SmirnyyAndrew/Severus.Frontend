import { Article } from "entities/Article/model/types/ArticleManagement/Article";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text";

export const getArticleTypes = (article: Article) => {
  return (
    <div className={classNames("", {}, [])}>
      <Text text={article.type.join(" ")} size={TextSize.S} />
    </div>
  );
};
