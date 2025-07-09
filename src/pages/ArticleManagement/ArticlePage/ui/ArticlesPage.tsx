import { ArticleViewType } from "entities/Article/model/types/ArticleManagement/ArticleViewType";
import { ArticleList } from "entities/Article/ui/ArticleList";
import { ArticlesPageFilters } from "features/ArticleDetailsManagement/ArticleSortAndFilter";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import GridIcon from "shared/assets/icons/article/grid-icon.svg";
import ListIcon from "shared/assets/icons/article/list-icon.svg";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Button } from "shared/ui/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Icon, IconSize } from "shared/ui/Icon";
import { Page } from "widgets/Page";
import { ArticlesPageReducer } from "..";
import { useArticlesPage } from "../model/hooks/useArticlesPage";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const [searchParams] = useSearchParams();

  const reducers: ReducersList = {
    articles: ArticlesPageReducer,
  };

  const {
    view,
    articles,
    page,
    limit,
    hasMore,
    inited,
    isLoading,
    getArticlesWithLimit,
    initArticles,
    setArticlesViewType,
    setPage,
  } = useArticlesPage();

  // один useEffect — для инициализации
  useInitialEffect(() => {
    initArticles(searchParams);
  });

  // другой — для загрузки статьи по текущей странице
  useEffect(() => {
    if (limit !== undefined && page === 1) {
      getArticlesWithLimit(false);
    }
  }, [page]);

  const onArticleTypeClick = (viewType: ArticleViewType) => {
    setArticlesViewType(viewType);
  };

  const onLoadNextPart = useCallback(() => {
    if (!hasMore || isLoading) return;

    const newPage = page + 1;
    setPage(newPage);
    getArticlesWithLimit();
  }, [page]);

  const getIconTypeMods = (type: ArticleViewType): Mods => {
    const isSelected = type === view;
    const mods: Mods = {
      [cls.isSelected]: isSelected,
    };

    return mods;
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <div className={classNames(cls.viewType, {}, [className])}>
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
        <ArticlesPageFilters />

        <ArticleList
          articles={articles}
          view={view}
          isLoading={isLoading}
          className={cls.list}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
