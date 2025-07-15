import { useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Column } from "shared/ui/Stack";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { SidebarItemList } from "../Module/SidebarItemList";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import * as cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const onToggle = () => {
    setHidden((hidden) => !hidden);
  };

  const itemsList = useMemo(
    () =>
      SidebarItemList.map((item) => (
        <SidebarItem item={item} hidden={hidden} key={item.path} />
      )),
    [hidden]
  );

  return (
    <aside
      data-testid="sidebar"
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
        <LangSwitcher short={!hidden} />
      </div>
    </aside>
  );
};
