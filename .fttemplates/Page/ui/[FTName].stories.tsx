import { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { [FTName] } from "./[FTName]";

const meta: Meta<typeof [FTName]> = {
  title: "pages/[FTName]",
  component: [FTName],
};

export default meta;
type Story = StoryObj<typeof [FTName]>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
