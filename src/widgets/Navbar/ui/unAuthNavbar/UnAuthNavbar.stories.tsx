import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import cls from "../Navbar.module.scss";
import { UnAuthNavbar } from "./UnAuthNavbar";

const meta: Meta<typeof UnAuthNavbar> = {
  title: "widgets/Navbar/UnAuthNavbar",
  component: UnAuthNavbar,
  args: {
    className: cls.navbar,
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof UnAuthNavbar>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
