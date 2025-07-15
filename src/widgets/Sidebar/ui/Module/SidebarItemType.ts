import { SVGProps } from "react";

export interface SidebarItemType {
  // Icon: VFC<SVGProps<SVGSVGElement>>;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  path: string;
  translationKey: string;
  authOnly?: boolean;
}
