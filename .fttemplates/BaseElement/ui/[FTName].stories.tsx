import type { Meta, StoryObj } from "@storybook/react"; 
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator"; 
import { [FTName] } from "./[FTName]";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof [FTName]> = {
  title: "/[FTName]",
  component: [FTName],
  args: {},
  argTypes:{},
};

export default meta;
type Story = StoryObj<typeof [FTName]>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};