import { ArticleExample } from "entities/Article";
import { ArticleListViewType } from "entities/Article/model/types/ArticleManagement/ArticleListViewType";
import { ArticleList } from "entities/Article/ui/ArticleList";
import { useState } from "react";
import GridIcon from "shared/assets/icons/article/grid-icon.svg";
import ListIcon from "shared/assets/icons/article/list-icon.svg";
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

  const [articleViewType, setArticleViewType] = useState<ArticleListViewType>(
    ArticleListViewType.LIST
  );

  const onListTypeClick = () => {
    setArticleViewType(ArticleListViewType.LIST);
  };
  const onGridTypeClick = () => {
    setArticleViewType(ArticleListViewType.GRID);
  };

  const getIconTypeMods = (type: ArticleListViewType): Mods => {
    const isSelected = type === articleViewType;
    const mods: Mods = {
      [cls.isSelected]: isSelected,
    };

    return mods;
  };

  //TODO: добавить thunk по получению всех статей
  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <div className={classNames(cls.ArticleTypeHeader, {}, [className])}>
        <Button
          isWrapper
          onClick={onListTypeClick}
          buttonTheme={ButtonTheme.CLEAR}
          className={classNames(
            cls.ListIcon,
            getIconTypeMods(ArticleListViewType.LIST),
            []
          )}
        >
          <Icon Svg={ListIcon} iconSize={IconSize.L} />
        </Button>

        <Button
          isWrapper
          onClick={onGridTypeClick}
          size={ButtonSize.M}
          buttonTheme={ButtonTheme.CLEAR}
          className={classNames(
            cls.GridIcon,
            getIconTypeMods(ArticleListViewType.GRID),
            []
          )}
        >
          <Icon Svg={GridIcon} iconSize={IconSize.L} />
        </Button>
      </div>

      <ArticleList
        articles={[
          ArticleExample,
          ArticleExample,
          ArticleExample,
          ArticleExample,
          ArticleExample,
        ]}
        view={articleViewType}
        isLoading={false}
      />
    </div>
  );
};

export default ArticlesPage;
