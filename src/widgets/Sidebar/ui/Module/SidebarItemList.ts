import AboutIcon from "shared/assets/icons/menu/about_page.svg";
import CreateArticleIcon from "shared/assets/icons/menu/create-article-icon.svg";
import MainIcon from "shared/assets/icons/menu/main_page.svg";
import { Routes } from "shared/const/router";
import { SidebarItemType } from "./SidebarItemType";

export const SidebarItemList: SidebarItemType[] = [
  {
    Icon: MainIcon,
    path: Routes.MainPages.Main(),
    translationKey: "nav_main_page",
  },
  {
    Icon: AboutIcon,
    path: Routes.MainPages.About(),
    translationKey: "nav_about_page",
  },
  {
    Icon: CreateArticleIcon,
    path: Routes.Article.Create(),
    translationKey: "Создать статью",
    authOnly: true,
  },
];
