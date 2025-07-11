import { Meta, StoryObj } from "@storybook/react/*";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "widgets/Navbar/Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
