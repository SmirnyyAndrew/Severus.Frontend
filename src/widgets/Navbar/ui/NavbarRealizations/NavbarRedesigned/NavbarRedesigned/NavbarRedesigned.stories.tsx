import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { NavbarRedesigned } from "./NavbarRedesigned";

const meta: Meta<typeof NavbarRedesigned> = {
  title: "widgets/Navbar/NavbarRedesigned/NavbarRedesigned",
  component: NavbarRedesigned,
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NavbarRedesigned>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
