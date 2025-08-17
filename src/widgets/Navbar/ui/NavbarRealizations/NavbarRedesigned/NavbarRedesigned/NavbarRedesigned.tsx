import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./NavbarRedesigned.module.scss";

interface NavbarRedesignedProps {
  className?: string;
}

export const NavbarRedesigned = (props: NavbarRedesignedProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.NavbarRedesigned, {}, [className])}></div>
  );
};
