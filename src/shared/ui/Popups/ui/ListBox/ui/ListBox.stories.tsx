import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ListBox } from "./ListBox";

const meta: Meta<typeof ListBox> = {
  title: "shared/Popups/ListBox",
  component: ListBox,
  args: {
    onChange(value) {
      console.log("value", value);
    },
    value: "Value first",
    readonly: false,
    direction: "bottom right",
    label: "Справа list box",
    defaultValue: "Выбери что-нибудь",
    items: [
      {
        value: "Value first",
        content: <p>component first</p>,
      },
      {
        value: "Value disabled",
        content: <p>component second</p>,
        disabled: true,
      },
      {
        value: "Value third",
        content: <p>component third</p>,
      },
    ],
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
