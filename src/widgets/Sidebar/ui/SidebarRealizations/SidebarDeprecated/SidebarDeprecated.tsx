import { LangSwitcher } from "features/NavbarManagement/LangSwitcher";
import { ThemeSwitcher } from "features/NavbarManagement/ThemeSwitcher";
import { useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { TestProps } from "shared/types/tests/testProps";
import { Button } from "shared/ui/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Column } from "shared/ui/Stack";
import { DeprecatedSidebarItemList } from "../../Module/DeprecatedSidebarItemList";
import { SidebarItem } from "../../SidebarItem/SidebarItem";
import * as cls from "./SidebarDeprecated.module.scss";

interface SidebarDeprecatedProps extends TestProps {
  className?: string;
}

export const SidebarDeprecated = (props: SidebarDeprecatedProps) => {
  const { className, "data-testid": testId = "Sidebar" } = props;
  const [hidden, setHidden] = useState<boolean>(true);
  const onToggle = () => {
    setHidden((hidden) => !hidden);
  };

  const itemsList = useMemo(
    () =>
      DeprecatedSidebarItemList.map((item) => (
        <SidebarItem item={item} hidden={hidden} key={item.path} />
      )),
    [hidden]
  );

  return (
    <aside
      data-testid={testId}
      className={classNames(cls.Sidebar, { [cls.hidden]: hidden }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        className={classNames(cls.hiddenBtn)}
        buttonTheme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
        onClick={onToggle}
      >
        {hidden ? ">" : "<"}
      </Button>

      <Column gap="8" alignItems="center" className={cls.items}>
        {itemsList}
      </Column>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher isShort={!hidden} />
      </div>
    </aside>
  );
};
