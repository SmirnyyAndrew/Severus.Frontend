import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Button, ButtonSize, ButtonTheme } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Shared/Button",
  component: Button,
  argTypes: {
    buttonTheme: {
      control: "radio",
      options: [
        ButtonTheme.BACKGROUND,
        ButtonTheme.BACKGROUND_INVERTED,
        ButtonTheme.CLEAR,
        ButtonTheme.OUTLINE,
        ButtonTheme.OUTLINE_INVERTED,
      ],
    },
    square: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: [ButtonSize.M, ButtonSize.L, ButtonSize.XL],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Light: Story = {
  args: {
    children: "Text",
    buttonTheme: ButtonTheme.BACKGROUND,
    square: false,
    size: ButtonSize.L,
    disabled: false,
  },
};

export const Dark: Story = {
  args: {
    children: "Text",
    buttonTheme: ButtonTheme.BACKGROUND,
    square: false,
    size: ButtonSize.L,
    disabled: false,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
