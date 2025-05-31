import { useArticle } from "entities/Article/model/hooks/useArticle";
import { ArticleBlockType } from "entities/Article/model/types/BlockManagement/ArticleBlockType";
import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { errorArticleImg } from "shared/const/plugFiles";
import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton } from "shared/ui/Skeleton";
import { Text, TextThemes } from "shared/ui/Text/Text";
import { ArticleCodeBlockComponent } from "../../ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../../ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../../ArticleTextBlockComponent/ui/ArticleTextBlockComponent";
import cls from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
  articleId: string;
  className?: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const { articleData, error, isLoading, getArticleById } = useArticle();

  useEffect(() => {
    getArticleById(articleId);
  }, [articleId]);

  if (isLoading)
    return (
      <div className={cls.skeletons}>
        <Skeleton width={400} height={24} />
        <Skeleton width={200} height={200} border="90%" />
        <Skeleton width={600} height={24} />
        <Skeleton width={600} height={24} />
        <Skeleton width={"100%"} height={200} />
        <Skeleton width={"100%"} height={200} />
        <Skeleton width={"100%"} height={200} />
        <Skeleton width={"100%"} height={200} />
      </div>
    );

  if (error)
    return (
      <Text textTheme={TextThemes.ERROR} isCenter>
        Article doesn't exist
      </Text>
    );

  return (
    <div className={classNames(cls.ArticleDetails, {}, [className])}>
      <p>Article ID: {articleData?.id}</p>
      <p>Title: {articleData?.title}</p>
      <p>Subtitile: {articleData?.subtitle}</p>
      <img
        src={articleData?.img ?? errorArticleImg}
        alt="article"
        className={cls.articleImage}
      />
      <p>Views: {articleData?.views}</p>
      <p>Created at: {articleData?.createdAt}</p>
      <p>Tags: {articleData?.type.join(" | ")}</p>

      {articleData?.blocks.map((b) => {
        if (b.type === ArticleBlockType.CODE) {
          return <ArticleCodeBlockComponent article={b} />;
        }
        if (b.type === ArticleBlockType.TEXT) {
          return <ArticleTextBlockComponent article={b} />;
        }
        if (b.type === ArticleBlockType.IMAGE) {
          return <ArticleImageBlockComponent article={b} />;
        }

        return <h1>Empty</h1>;
      })}
    </div>
  );
});
