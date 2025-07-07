import { ArticleViewType } from "entities/Article/model/types/ArticleManagement/ArticleViewType";
import { ArticleList } from "entities/Article/ui/ArticleList";
import { useCallback, useEffect } from "react";
import GridIcon from "shared/assets/icons/article/grid-icon.svg";
import ListIcon from "shared/assets/icons/article/list-icon.svg";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Button } from "shared/ui/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Icon, IconSize } from "shared/ui/Icon";
import { Page } from "shared/ui/Page";
import { ArticlePageReducer } from "..";
import { useArticlePage } from "../model/hooks/useArticlePage";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  const reducers: ReducersList = {
    articles: ArticlePageReducer,
  };

  const {
    view,
    articles,
    page,
    limit,
    hasMore,
    isLoading,
    getArticlesWithLimit,
    initArticleType,
    setArticleViewType,
    setPage,
  } = useArticlePage();

  // useEffect(() => {
  //   if (limit === undefined) initArticleType();
  //   else getArticlesWithLimit(page);
  // }, [getArticlesWithLimit, initArticleType]);

  // один useEffect — для инициализации
  useEffect(() => {
    if (limit === undefined) {
      initArticleType();
    }
  }, [limit, initArticleType]);

  // другой — для загрузки статьи по текущей странице
  useEffect(() => {
    if (limit !== undefined) {
      getArticlesWithLimit(page);
    }
  }, [page, limit, getArticlesWithLimit]);

  const onArticleTypeClick = (viewType: ArticleViewType) => {
    setArticleViewType(viewType);
  };

  const onLoadNextPart = useCallback(() => {
    if (!hasMore || isLoading) return;

    console.log("onLoadNextPart");
    const newPage = page + 1;
    getArticlesWithLimit(newPage);
    setPage(newPage);
  }, [page]);

  const getIconTypeMods = (type: ArticleViewType): Mods => {
    const isSelected = type === view;
    const mods: Mods = {
      [cls.isSelected]: isSelected,
    };

    return mods;
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
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

        <ArticleList articles={articles} view={view} isLoading={false} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
