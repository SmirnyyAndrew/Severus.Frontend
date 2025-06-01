import { ArticleCodeBlock } from "entities/Article/model/types/BlockManagement/ArticleBlocks/ArticleCodeBlock";
import { classNames } from "shared/lib/classNames/classNames";
import { Code } from "shared/ui/Code";
import { Text, TextSize } from "shared/ui/Text";
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
      <Text size={TextSize.L} text={`ID: ${article.id}`} />
      <Code code={article.code} />
      <Text size={TextSize.XS} text={`Code`} />
    </div>
  );
};
