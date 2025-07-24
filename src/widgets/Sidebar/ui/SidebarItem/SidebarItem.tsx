import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/const/router";
import { classNames } from "shared/lib/classNames/classNames";
import { SidebarItemType } from "../Module/SidebarItemType";
import * as cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  hidden?: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { hidden, item } = props;
  const { authData } = useUserAuth();
  const { t } = useTranslation();

  if (item.authOnly && !authData) return null;

  return (
    <AppLink
      className={classNames(cls.item, { [cls.hidden]: hidden })}
      to={item?.path ?? RoutePath.not_found}
      linkTheme={AppLinkTheme.PRIMARY}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.translationKey)}</span>
    </AppLink>
  );
};
