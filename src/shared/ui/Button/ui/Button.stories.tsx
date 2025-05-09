import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Button, ButtonSize, ButtonTheme } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Shared/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Light: Story = {
  args: {
    children: "Text",
    buttonTheme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.L,
  },
  argTypes: {
    buttonTheme: {
      control: "radio",
      options: [
        ButtonTheme.BACKGROUND,
        ButtonTheme.BACKGROUND_INVERTED,
        ButtonTheme.CLEAR,
        ButtonTheme.OUTLINE,
      ],
    },
    square: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: [ButtonSize.M, ButtonSize.L, ButtonSize.XL],
    },
  },
};

export const Dark: Story = {
  args: {
    children: "Text",
    buttonTheme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.L,
  },
  argTypes: {
    buttonTheme: {
      control: "radio",
      options: [
        ButtonTheme.BACKGROUND,
        ButtonTheme.BACKGROUND_INVERTED,
        ButtonTheme.CLEAR,
        ButtonTheme.OUTLINE,
      ],
    },
    square: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: [ButtonSize.M, ButtonSize.L, ButtonSize.XL],
    },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
