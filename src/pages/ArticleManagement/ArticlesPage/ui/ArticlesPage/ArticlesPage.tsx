import { Store } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { ArticleList } from "entities/Article/ui/ArticleListManagement/ArticleList";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { ArticlesPageFilters } from "features/ArticleDetailsManagement/ArticleSortAndFilter";
import { ScrollSaveReducer } from "features/UIManagement/ScrollSave";
import { useCallback, useEffect } from "react";
import { useStore } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "widgets/Page";
import { ArticlesPageReducer } from "../..";
import { useArticlesPage } from "../../model/hooks/useArticlesPage";
import { ArticlesPageTypeSwitcher } from "../ArticlesPageTypeSwitcher/ArticlesPageTypeSwitcher";
import * as cls from "./ArticlesPage.module.scss";

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

  const { authData } = useUserAuth();

  const {
    view,
    articles,
    page,
    limit,
    hasMore,
    isLoading,
    getArticlesWithLimit,
    initArticlesPage,
    setPage,
  } = useArticlesPage();

  const store = useStore() as Store<StateSchema>;

  // один useEffect — для инициализации
  useEffect(() => {
    if (authData) {
      initArticlesPage(searchParams);
    }
  }, [searchParams]);

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
        data-testid="ArticlesPage"
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
