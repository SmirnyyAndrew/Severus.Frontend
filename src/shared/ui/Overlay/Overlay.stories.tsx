import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Overlay } from "./Overlay";

const meta: Meta<typeof Overlay> = {
  title: "shared/Overlay",
  component: Overlay,
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
