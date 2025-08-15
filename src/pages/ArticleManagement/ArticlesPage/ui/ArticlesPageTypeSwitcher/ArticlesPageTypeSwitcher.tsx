import { ArticleViewType } from "entities/Article";
import { useEffect } from "react";
import GridIcon from "shared/assets/icons/article/grid-icon.svg";
import ListIcon from "shared/assets/icons/article/list-icon.svg";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Icon, IconFills, IconSize } from "shared/ui/Icon";
import { Row } from "shared/ui/Stack";
import { useArticlesPage } from "../..";
import * as cls from "./ArticlesPageTypeSwitcher.module.scss";

interface ArticlesPageTypeSwitcherProps {
  className?: string;
}

export const ArticlesPageTypeSwitcher = (
  props: ArticlesPageTypeSwitcherProps
) => {
  const { className } = props;

  const { view, setArticlesViewType, initArticlesViewType } = useArticlesPage();

  useEffect(() => {
    initArticlesViewType(view);
  }, [initArticlesViewType, view]);

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
          data-testid="ListButtonSwitcher"
          isWrapper
          onClick={() => onArticleTypeClick("LIST")}
          buttonTheme={ButtonTheme.CLEAR}
          className={classNames(cls.ListIcon, getIconTypeMods("LIST"), [])}
        >
          <Icon
            Svg={ListIcon}
            iconFill={IconFills.INVERTED_BACKGROUND}
            iconSize={IconSize.L}
          />
        </Button>

        <Button
          data-testid="GridButtonSwitcher"
          isWrapper
          onClick={() => onArticleTypeClick("GRID")}
          size={ButtonSize.M}
          buttonTheme={ButtonTheme.CLEAR}
          className={classNames(cls.GridIcon, getIconTypeMods("GRID"), [])}
        >
          <Icon
            Svg={GridIcon}
            iconFill={IconFills.INVERTED_BACKGROUND}
            iconSize={IconSize.L}
          />
        </Button>
      </Row>
    </div>
  );
};
