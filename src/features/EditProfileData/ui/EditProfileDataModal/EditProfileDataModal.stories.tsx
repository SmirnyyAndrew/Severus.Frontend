import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { EditProfileDataModal } from "./EditProfileDataModal";

const meta: Meta<typeof EditProfileDataModal> = {
  title: "Features/EditProfileDataForm/EditProfileDataModal",
  component: EditProfileDataModal,
  args: {
    isOpen: true,
  },
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
