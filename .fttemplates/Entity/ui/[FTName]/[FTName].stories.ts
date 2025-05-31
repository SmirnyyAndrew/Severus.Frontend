import { Meta, StoryObj } from "@storybook/react/*";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { [FTName] } from "./[FTName]";

const meta: Meta<typeof [FTName]> = {
  title: "entities/[FTName]",
  component: [FTName],
};

export default meta;
type Story = StoryObj<typeof [FTName]>;

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
