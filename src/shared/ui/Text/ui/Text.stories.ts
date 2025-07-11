import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { TextSize } from "../model/types/TextSize";
import { TextThemes } from "../model/types/TextThemes";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  args: {
    textTheme: TextThemes.ERROR,
    title: "This is title",
    text: "This is text",
    size: TextSize.L,
    position: "center",
    gap: "12",
  },
  argTypes: {
    textTheme: {
      control: "radio",
      options: [TextThemes.INFO, TextThemes.WARNING, TextThemes.ERROR],
    },
    size: {
      control: "radio",
      options: [TextSize.S, TextSize.XS, TextSize.L, TextSize.XL],
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
