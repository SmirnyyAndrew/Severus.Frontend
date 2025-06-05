import { useArticle } from "entities/Article";
import { ArticleViewType } from "entities/Article/model/types/ArticleManagement/ArticleViewType";
import { ArticleList } from "entities/Article/ui/ArticleList";
import { useEffect } from "react";
import GridIcon from "shared/assets/icons/article/grid-icon.svg";
import ListIcon from "shared/assets/icons/article/list-icon.svg";
import { ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Icon, IconSize } from "shared/ui/Icon";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  const {
    articles,
    articleViewType,
    getArticles,
    initArticleType,
    setArticleViewType,
  } = useArticle();

  useEffect(() => {
    getArticles();
    initArticleType();
  }, [getArticles, initArticleType]);

  const onArticleTypeClick = (type: ArticleViewType) => {
    setArticleViewType(type);
    localStorage.setItem(ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY, type);
  };

  const getIconTypeMods = (type: ArticleViewType): Mods => {
    const isSelected = type === articleViewType;
    const mods: Mods = {
      [cls.isSelected]: isSelected,
    };

    return mods;
  };

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <div className={classNames(cls.ArticleTypeHeader, {}, [className])}>
        <Button
          isWrapper
          onClick={() => onArticleTypeClick(ArticleViewType.LIST)}
          buttonTheme={ButtonTheme.CLEAR}
          className={classNames(
            cls.ListIcon,
            getIconTypeMods(ArticleViewType.LIST),
            []
          )}
        >
          <Icon Svg={ListIcon} iconSize={IconSize.L} />
        </Button>

        <Button
          isWrapper
          onClick={() => onArticleTypeClick(ArticleViewType.GRID)}
          size={ButtonSize.M}
          buttonTheme={ButtonTheme.CLEAR}
          className={classNames(
            cls.GridIcon,
            getIconTypeMods(ArticleViewType.GRID),
            []
          )}
        >
          <Icon Svg={GridIcon} iconSize={IconSize.L} />
        </Button>
      </div>

      <ArticleList
        articles={articles}
        view={articleViewType}
        isLoading={false}
      />
    </div>
  );
};

export default ArticlesPage;
