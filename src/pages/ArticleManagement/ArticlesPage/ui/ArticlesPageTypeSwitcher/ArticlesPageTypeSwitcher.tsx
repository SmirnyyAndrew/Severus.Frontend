import { ArticleViewType } from "entities/Article";
import GridIcon from "shared/assets/icons/article/grid-icon.svg";
import ListIcon from "shared/assets/icons/article/list-icon.svg";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Icon, IconSize } from "shared/ui/Icon";
import { Row } from "shared/ui/Stack";
import { useArticlesPage } from "../..";
import cls from "./ArticlesPageTypeSwitcher.module.scss";

interface ArticlesPageTypeSwitcherProps {
  className?: string;
}

export const ArticlesPageTypeSwitcher = (
  props: ArticlesPageTypeSwitcherProps
) => {
  const { className } = props;

  const { view, setArticlesViewType } = useArticlesPage();

  const onArticleTypeClick = (viewType: ArticleViewType) => {
    setArticlesViewType(viewType);
  };

  const getIconTypeMods = (type: ArticleViewType): Mods => {
    const isSelected = type === view;
    const mods: Mods = {
      [cls.isSelected]: isSelected,
    };

    return mods;
  };

  return (
    <div className={classNames("", {}, [className])}>
      <Row justifyContents="end" gap="4" className={className}>
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
      </Row>
    </div>
  );
};
