import { ArticleCodeBlock } from "entities/Article/model/types/BlockManagement/ArticleBlocks/ArticleCodeBlock";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
  className?: string;
  article: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = (
  props: ArticleCodeBlockComponentProps
) => {
  const { className, article } = props;

  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      <p>ID: {article.id}</p>
      <p>Code: </p>
      <pre className={classNames(cls.code, {}, [className])}>
        <code>{article.code}</code>
      </pre>
      <hr />
    </div>
  );
};
