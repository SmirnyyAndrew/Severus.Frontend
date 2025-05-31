import { ArticleTextBlock } from "entities/Article/model/types/BlockManagement/ArticleBlocks/ArticleTextBlock";
import { Fragment } from "react/jsx-runtime";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps {
  className?: string;
  article: ArticleTextBlock;
}

export const ArticleTextBlockComponent = (
  props: ArticleTextBlockComponentProps
) => {
  const { className, article } = props;

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      <hr />
      <p>ID: {article.id}</p>
      <p>Titile: {article.title}</p>

      <div className={classNames(cls.paragraphs, {}, [className])}>
        <p>
          Paragraphs:
          <br />
          {article.paragraphs.map((paragraphs, index) => (
            <Fragment key={index}>
              {paragraphs}
              <br />
              <br />
            </Fragment>
          ))}
        </p>
        <hr />
      </div>
    </div>
  );
};
