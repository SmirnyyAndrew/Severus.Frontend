import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { LoginModal } from "../..";

const meta: Meta<typeof LoginModal> = {
  title: "features/AuthManagement/AuthByUsername/LoginModal",
  component: LoginModal,
  args: {
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
