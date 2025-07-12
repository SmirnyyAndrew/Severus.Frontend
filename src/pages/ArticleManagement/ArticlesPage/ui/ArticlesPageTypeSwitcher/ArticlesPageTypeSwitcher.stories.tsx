import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ArticlesPageTypeSwitcher } from "./ArticlesPageTypeSwitcher";

const meta: Meta<typeof ArticlesPageTypeSwitcher> = {
  title: "pages/ArticleManagement/ArticlesPage/ArticlesPageTypeSwitcher",

  component: ArticlesPageTypeSwitcher,
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesPageTypeSwitcher>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
