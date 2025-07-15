import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";
import * as cls from "./Button.module.scss";

describe("Button", () => {
  const buttonText = "TEST";

  test("Render", async () => {
    await render(<Button>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  test("With clear theme", async () => {
    await render(<Button buttonTheme={ButtonTheme.CLEAR}>{buttonText}</Button>);
    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
    expect(button.className).toContain(cls.clear);
  });
});
