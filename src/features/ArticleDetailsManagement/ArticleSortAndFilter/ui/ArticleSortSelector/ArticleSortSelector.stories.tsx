import type { Meta, StoryObj } from "@storybook/react"; 
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator"; 
import { ArticleSortSelector } from "./ArticleSortSelector";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ArticleSortSelector> = {
  title: "/ArticleSortSelector",
  component: ArticleSortSelector,
  args: {},
  argTypes:{},
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};