import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import EditProfileDataForm from "./EditProfileDataForm";

const meta: Meta<typeof EditProfileDataForm> = {
  title: "Features/EditProfileDataForm/EditProfileDataForm",
  component: EditProfileDataForm,
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.CUTE)],
};
