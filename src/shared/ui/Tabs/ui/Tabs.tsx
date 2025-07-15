import { ReactNode, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "shared/ui/Card";
import { CardTheme } from "shared/ui/Card/ui/Card";
import * as cls from "./Tabs.module.scss";

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  value: string;
  onTabClick: (newTab: TabItem) => void;
  className?: string;
}

export const Tabs = (props: TabsProps) => {
  const { className, tabs, value, onTabClick } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick]
  );

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          className={cls.tab}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={clickHandle(tab)}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
