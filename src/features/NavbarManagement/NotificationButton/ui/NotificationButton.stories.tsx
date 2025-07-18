import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { NotificationButton } from "./NotificationButton";

const meta: Meta<typeof NotificationButton> = {
  title: "features/NavbarManagement/NotificationButton",
  component: NotificationButton,
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
