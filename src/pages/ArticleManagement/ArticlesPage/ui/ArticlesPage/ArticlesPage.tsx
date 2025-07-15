import { Store } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { ArticleList } from "entities/Article/ui/ArticleListManagement/ArticleList";
import { ArticlesPageFilters } from "features/ArticleDetailsManagement/ArticleSortAndFilter";
import { ScrollSaveReducer } from "features/UIManagement/ScrollSave";
import { useCallback, useEffect } from "react";
import { useStore } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "widgets/Page";
import { ArticlesPageReducer } from "../..";
import { useArticlesPage } from "../../model/hooks/useArticlesPage";
import { ArticlesPageTypeSwitcher } from "../ArticlesPageTypeSwitcher/ArticlesPageTypeSwitcher";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const [searchParams] = useSearchParams();

  const reducers: ReducersList = {
    articles: ArticlesPageReducer,
    pageScroll: ScrollSaveReducer,
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

  const store = useStore() as Store<StateSchema>;

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

  const onLoadNextPart = useCallback(() => {
    const state: StateSchema = store.getState();
    const isLoading = state.articles?.isLoading;

    if (!hasMore || isLoading) return;

    const newPage = page + 1;
    setPage(newPage);
    getArticlesWithLimit();
  }, [page]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        saveScrollPosition
        onScrollEnd={onLoadNextPart}
        className={className}
      >
        <ArticlesPageTypeSwitcher />
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
