import { useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { SortOrder } from "shared/types/sortOrder/SortOrder";
import { Select } from "shared/ui/Select";
import { SelectOption } from "shared/ui/Select/ui/Select";
import { ArticleSortField } from "../../model/types/ArticleSortField";
import cls from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      { value: "asc", content: "Возрастание" },
      { value: "desc", content: "Убывание" },
    ],
    []
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      { value: ArticleSortField.CREATED, content: "Дата создания" },
      { value: ArticleSortField.TITLE, content: "Заголовок" },
      { value: ArticleSortField.VIEWS, content: "Просмотры" },
    ],
    []
  );

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
        label="Сортировать по"
      />
      <Select
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
        label="Сортировать по"
      />
    </div>
  );
};
