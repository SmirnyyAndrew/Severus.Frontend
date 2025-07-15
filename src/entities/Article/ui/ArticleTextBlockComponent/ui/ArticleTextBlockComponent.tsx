import { ArticleTextBlock } from "entities/Article/model/types/BlockManagement/ArticleBlocks/ArticleTextBlock";
import { Fragment } from "react/jsx-runtime";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text";
import * as cls from "./ArticleTextBlockComponent.module.scss";

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
      <Text
        text={`ID:  ${article.id}`}
        title={article.title}
        size={TextSize.L}
      />

      <div className={classNames(cls.paragraphs, {}, [className])}>
        <Text text="Paragraphs:" size={TextSize.XS} />
        {article.paragraphs.map((paragraph, index) => (
          <Fragment key={index}>
            <Text
              text={paragraph}
              size={TextSize.XS}
              key={index}
              position="start"
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
