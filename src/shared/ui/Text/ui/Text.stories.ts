import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Text, TextSize, TextThemes } from "./Text";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  args: {
    textTheme: TextThemes.ERROR,
    title: "This is title",
    text: "This is text",
    size: TextSize.L,
    isCenter: false,
  },
  argTypes: {
    textTheme: {
      control: "radio",
      options: [TextThemes.INFO, TextThemes.WARNING, TextThemes.ERROR],
    },
    isCenter: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: [TextSize.S, TextSize.L, TextSize.XL],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
