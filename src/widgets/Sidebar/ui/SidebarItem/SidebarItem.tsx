import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { SidebarItemType } from "../Module/SidebarItemType";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item?: SidebarItemType;
  hidden?: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { hidden, item } = props;

  const { t } = useTranslation();

  return (
    <AppLink
      className={classNames(cls.item, { [cls.hidden]: hidden })}
      to={item.path}
      linkTheme={AppLinkTheme.PRIMARY}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.translationKey)}</span>
    </AppLink>
  );
};
