import { fireEvent, screen } from "@testing-library/react";
import { ComponentRender } from "shared/lib/tests/componentRender/ComponentRender";
import * as cls from "./Sidebar.module.scss";
import { SidebarDeprecated } from "./SidebarDeprecated";

describe("SidebarDeprecated.test", () => {
  test("Render", () => {
    ComponentRender(<SidebarDeprecated />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Hidden", () => {
    ComponentRender(<SidebarDeprecated className={cls.link} />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("hidden");
    screen.debug();
  });
});
