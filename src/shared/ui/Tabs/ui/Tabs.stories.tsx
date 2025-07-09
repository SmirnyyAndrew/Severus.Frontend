import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "shared/Tabs",
  component: Tabs,
  args: {
    value: "Name",
    tabs: [
      { content: "Content", value: "value" },
      { content: "Content", value: "value" },
    ],
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
