import { ReactNode, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "shared/ui/Card";
import { CardTheme } from "shared/ui/Card/ui/Card";
import * as cls from "./Tabs.module.scss";

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (newTab: TabItem<T>) => void;
  className?: string;
  "data-testid"?: string;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const {
    className,
    tabs,
    value,
    onTabClick,
    "data-testid": testId = "Tabs",
  } = props;

  const clickHandle = useCallback(
    (tab: TabItem<T>) => () => {
      onTabClick(tab);
    },
    [onTabClick]
  );

  return (
    <div data-testid={testId} className={classNames(cls.Tabs, {}, [className])}>
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
