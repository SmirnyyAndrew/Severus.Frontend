import { SVGProps, VFC } from "react";

export interface SidebarItemType {
  Icon: VFC<SVGProps<SVGSVGElement>>;
  path: string;
  translationKey: string;
}
