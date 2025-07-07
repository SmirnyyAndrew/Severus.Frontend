import { ArticleViewType } from "entities/Article/model/types/ArticleManagement/ArticleViewType";
import { ArticleList } from "entities/Article/ui/ArticleList";
import { useEffect } from "react";
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
    limit,
    getArticlesWithLimit,
    initArticleType,
    setArticleViewType,
  } = useArticlePage();

  useEffect(() => {
    if (limit === undefined) initArticleType();
    else getArticlesWithLimit();
  }, [getArticlesWithLimit, initArticleType]);

  const onArticleTypeClick = (viewType: ArticleViewType) => {
    setArticleViewType(viewType);
  };

  const getIconTypeMods = (type: ArticleViewType): Mods => {
    const isSelected = type === view;
    const mods: Mods = {
      [cls.isSelected]: isSelected,
    };

    return mods;
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
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

        <ArticleList articles={articles} view={view} isLoading={false} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
