import { fireEvent, screen } from "@testing-library/react";
import { ComponentRender } from "shared/lib/tests/componentRender/ComponentRender";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("Render", () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Hidden", () => {
    ComponentRender(<Sidebar />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("hidden");
    screen.debug();
  });
});
