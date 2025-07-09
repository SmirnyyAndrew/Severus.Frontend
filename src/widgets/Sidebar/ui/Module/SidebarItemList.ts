import AboutIcon from "shared/assets/icons/menu/about_page.svg";
import CreateArticleIcon from "shared/assets/icons/menu/create-article-icon.svg";
import MainIcon from "shared/assets/icons/menu/main_page.svg";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { SidebarItemType } from "./SidebarItemType";

export const SidebarItemList: SidebarItemType[] = [
  { Icon: MainIcon, path: RoutePath.main, translationKey: "nav_main_page" },
  { Icon: AboutIcon, path: RoutePath.about, translationKey: "nav_about_page" },
  {
    Icon: CreateArticleIcon,
    path: RoutePath.article_create,
    translationKey: "Создать статью",
    authOnly: true,
  },
];
