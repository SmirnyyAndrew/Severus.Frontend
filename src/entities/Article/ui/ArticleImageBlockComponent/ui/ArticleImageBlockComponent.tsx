import { ArticleImageBlock } from "entities/Article/model/types/BlockManagement/ArticleBlocks/ArticleImageBlock";
import { classNames } from "shared/lib/classNames/classNames";
import { Image } from "shared/ui/Image";
import { Text, TextSize } from "shared/ui/Text";
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
      <Text size={TextSize.L} text={`ID: ${article.id}`} />
      <Image src={article.src} title={article.title} />
    </div>
  );
};
