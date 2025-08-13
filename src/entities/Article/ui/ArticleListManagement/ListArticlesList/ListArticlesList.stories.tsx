import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ArticleExample } from "entities/Article/model/mocs/ArticleExamples";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ListArticlesList } from "./ListArticlesList";

const meta: Meta<typeof ListArticlesList> = {
  title: "entities/Article/ArticleList/ListArticlesList",
  component: ListArticlesList,
  args: {
    isLoading: false,
    articles: [ArticleExample, ArticleExample, ArticleExample],
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ListArticlesList>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
