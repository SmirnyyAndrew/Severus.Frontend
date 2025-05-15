import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { LoginModal } from "features/AuthByUsername";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof LoginModal> = {
  title: "Features/LoginModal",
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
