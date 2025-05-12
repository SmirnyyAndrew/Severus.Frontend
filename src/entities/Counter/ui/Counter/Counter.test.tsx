import { fireEvent, screen } from "@testing-library/react";
import { ComponentRender } from "shared/lib/tests/componentRender/ComponentRender";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("render", () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 5,
        },
      },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("5");
  });

  test("increment", () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 5,
        },
      },
    });
    const incrementButton = screen.getByTestId("increment-btn");
    fireEvent.click(incrementButton);
    expect(screen.getByTestId("value-title")).toHaveTextContent("6");
  });

  test("decrement", () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 5,
        },
      },
    });
    const incrementButton = screen.getByTestId("decrement-btn");
    fireEvent.click(incrementButton);
    expect(screen.getByTestId("value-title")).toHaveTextContent("4");
  });
});
