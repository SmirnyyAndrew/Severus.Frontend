import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "shared/Select",
  component: Select,
  args: {
    label: "Label",
    value: "Option 1",
    options: [
      { content: "option content", value: "option value" },
      { content: "dim", value: "pakmz" },
      { content: "lamr", value: "oskz" },
    ],
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
