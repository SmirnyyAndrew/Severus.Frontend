import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import ArticlesPage from "./ArticlesPage";

const meta: Meta<typeof ArticlesPage> = {
  title: "Page/ArticleManagement/ArticlesPage",
  component: ArticlesPage,
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
