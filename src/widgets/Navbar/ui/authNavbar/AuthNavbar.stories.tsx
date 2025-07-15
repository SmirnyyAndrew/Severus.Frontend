import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import * as cls from "../Navbar.module.scss";
import { AuthNavbar } from "./AuthNavbar";

const meta: Meta<typeof AuthNavbar> = {
  title: "widgets/Navbar/AuthNavbar",
  component: AuthNavbar,
  args: { className: cls.navbar },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AuthNavbar>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
