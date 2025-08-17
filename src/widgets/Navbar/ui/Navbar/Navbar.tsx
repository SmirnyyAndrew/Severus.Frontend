import { ToggleFeatures } from "shared/lib/features";
import { NavbarDeprecated } from "../NavbarRealizations/NavbarDeprecated/NavbarDeprecated";
import { NavbarRedesigned } from "../NavbarRealizations/NavbarRedesigned/NavbarRedesigned/NavbarRedesigned";

export const Navbar = () => {
  return (
    <ToggleFeatures
      name={"isAppRedesinged"}
      on={<NavbarRedesigned />}
      off={<NavbarDeprecated />}
    />
  );
};
