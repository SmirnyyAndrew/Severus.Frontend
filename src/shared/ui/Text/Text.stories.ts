import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Text, TextThemes } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Shared/Text",
  component: Text,
  args: {
    textTheme: TextThemes.ERROR,
    children: "Text",
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
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Light: Story = {
  args: {
    textTheme: TextThemes.ERROR,
    children: "Here is error",
  },
};

export const Dark: Story = {
  args: {
    textTheme: TextThemes.ERROR,
    children: "Here is error",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
