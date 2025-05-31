import { ArticleImageBlock } from "entities/Article/model/types/BlockManagement/ArticleBlocks/ArticleImageBlock";
import { errorArticleImg } from "shared/const/plugFiles";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
  className?: string;
  article: ArticleImageBlock;
}

export const ArticleImageBlockComponent = (
  props: ArticleImageBlockComponentProps
) => {
  const { className, article } = props;

  return (
    <div
      className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
    >
      <p>ID: {article.id}</p>
      <img src={article.src ?? errorArticleImg} className={cls.image} />
      {article.title && <p>{article.title}</p>}
      <hr />
    </div>
  );
};
