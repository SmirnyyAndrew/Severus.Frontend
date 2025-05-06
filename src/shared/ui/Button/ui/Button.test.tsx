import { render, screen } from "@testing-library/react";
import React from "react";
import { Button, ButtonTheme } from "./Button";

describe("Button", () => {
  const buttonText = "TEST";
  test("Render", () => {
    render(<Button>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  test("With clear theme", () => {
    render(<Button buttonTheme={ButtonTheme.CLEAR}>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toHaveClass("clear");
    screen.debug();
  });
});
