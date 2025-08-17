import { ToggleFeatures } from "shared/lib/features";
import { SidebarDeprecated } from "../SidebarRealizations/SidebarDeprecated/SidebarDeprecated";
import { SidebarRedesigned } from "../SidebarRealizations/SidebarRedesigned/SidebarRedesigned";

export const Sidebar = () => {
  return (
    <ToggleFeatures
      name={"isAppRedesinged"}
      on={<SidebarRedesigned />}
      off={<SidebarDeprecated />}
    />
  );
};
