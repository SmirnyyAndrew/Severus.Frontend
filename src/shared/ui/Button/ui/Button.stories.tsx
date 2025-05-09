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

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "Text",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clear: Story = {
  args: {
    children: "Text",
    buttonTheme: ButtonTheme.CLEAR,
  },
};

export const ClearDark: Story = {
  args: {
    children: "Text",
    buttonTheme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
  args: {
    children: "Text",
    buttonTheme: ButtonTheme.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: "Text",
    buttonTheme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Background: Story = {
  args: {
    children: "Text",
    buttonTheme: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundInverted: Story = {
  args: {
    children: "Text",
    buttonTheme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Square: Story = {
  args: {
    children: ">",
    square: true,
    size: ButtonSize.XL,
    buttonTheme: ButtonTheme.BACKGROUND_INVERTED,
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: [ButtonSize.M, ButtonSize.L, ButtonSize.XL],
    },
    buttonTheme: {
      control: { type: "radio" },
      options: [
        ButtonTheme.CLEAR,
        ButtonTheme.OUTLINE,
        ButtonTheme.BACKGROUND,
        ButtonTheme.BACKGROUND_INVERTED,
      ],
    },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const TestSize: Story = {
  args: {
    children: "Text",
    buttonTheme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
