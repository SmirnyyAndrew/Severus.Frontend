import { fireEvent, screen } from "@testing-library/react";
import { ComponentRender } from "shared/lib/tests/componentRender/ComponentRender";
import { Sidebar } from "./Sidebar";
import * as cls from "./Sidebar.module.scss";

describe("Sidebar", () => {
  test("Render", () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Hidden", () => {
    ComponentRender(<Sidebar className={cls.link} />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("hidden");
    screen.debug();
  });
});
