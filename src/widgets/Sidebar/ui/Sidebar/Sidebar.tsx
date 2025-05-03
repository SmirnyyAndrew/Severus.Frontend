import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const onToggle = () => {
    setHidden((hidden) => !hidden);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.hidden]: hidden }, [className])}
    >
      <button onClick={onToggle}>Toggle sidebar</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* <LangSwitcher/> */}
      </div>
    </div>
  );
};
