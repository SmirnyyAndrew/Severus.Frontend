import { Meta, StoryObj } from "@storybook/react/*";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ProfileCard } from "./ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: "entities/Profile/ProfileCard",
  component: ProfileCard,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

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
