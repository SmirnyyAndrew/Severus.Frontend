import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ArticleExample } from "entities/Article";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { GridArticlesList } from "./GridArticlesList";

const meta: Meta<typeof GridArticlesList> = {
  title: "entities/Article/ArticleList/GridArticlesList",
  component: GridArticlesList,
  args: {
    isLoading: false,
    articles: [
      ArticleExample,
      ArticleExample,
      ArticleExample,
      ArticleExample,
      ArticleExample,
      ArticleExample,
      ArticleExample,
      ArticleExample,
      ArticleExample,
    ],
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof GridArticlesList>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
