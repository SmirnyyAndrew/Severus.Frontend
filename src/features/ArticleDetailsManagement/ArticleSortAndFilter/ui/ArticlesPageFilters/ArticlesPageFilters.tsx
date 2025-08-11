import { ArticleType } from "entities/Article/model/types/ArticleManagement/ArticleType";
import { useArticlesPage } from "pages/ArticleManagement/ArticlesPage";
import { useCallback, useMemo } from "react";
import { PAGE_FILTERS_DEBOUNCE } from "shared/const/delays";
import { classNames } from "shared/lib/classNames/classNames";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { SortOrder } from "shared/types/sortOrder/SortOrder";
import { Card } from "shared/ui/Card";
import { Input } from "shared/ui/Input/Input";
import { Tabs } from "shared/ui/Tabs";
import { TabItem } from "shared/ui/Tabs/ui/Tabs";
import { ArticleSortField, ArticleSortSelector } from "../..";
import * as cls from "./ArticlesPageFilters.module.scss";

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
  const { className } = props;
  const {
    sort,
    order,
    search,
    type,
    getArticlesWithLimit,
    setPage,
    setOrder,
    setSearch,
    setSort,
    setType,
    setHasMore,
  } = useArticlesPage();

  const getData = useCallback(() => {
    getArticlesWithLimit(true);
  }, []);

  const debouncedFetchData = useDebounce(getData, PAGE_FILTERS_DEBOUNCE);

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      setSort(newSort);
      setPage(1);
      getData();
    },
    [debouncedFetchData]
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      setOrder(newOrder);
      setPage(1);
      getData();
    },
    [debouncedFetchData]
  );

  const onChangeSearch = useCallback(
    (newSearch: string) => {
      setSearch(newSearch);
      setPage(1);
      debouncedFetchData();
    },
    [debouncedFetchData]
  );

  const onChangeType = useCallback(
    (tab: TabItem<ArticleType>) => {
      let type: ArticleType = tab.value;
      setHasMore(true);
      setType(type);
      setPage(1);
      getData();
    },
    [debouncedFetchData, getData]
  );

  const tagTabs = useMemo<TabItem<ArticleType>[]>(
    () =>
      Object.values(ArticleType).map((type) => ({
        value: type as ArticleType,
        content: type,
      })),
    []
  );

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </div>
      <Card>
        <Input
          data-testid="SearchInput"
          placeholder="Поиск"
          value={search}
          onChange={onChangeSearch}
        />
      </Card>

      <Tabs
        data-testid={`Tabs`}
        tabs={tagTabs}
        value={type}
        className={cls.tabs}
        onTabClick={onChangeType}
      />
    </div>
  );
};
