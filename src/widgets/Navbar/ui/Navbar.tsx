import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({}: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.links}>
        <AppLink to={"/"} linkTheme={AppLinkTheme.PRIMARY}>
          Главная страница
        </AppLink>
        <AppLink to={"/about"} linkTheme={AppLinkTheme.PRIMARY}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
