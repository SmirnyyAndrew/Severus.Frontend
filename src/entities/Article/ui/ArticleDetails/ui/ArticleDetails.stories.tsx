import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ArticleDetails } from "./ArticleDetails";

const meta: Meta<typeof ArticleDetails> = {
  title: "entities/Article/ArticleDetails",
  component: ArticleDetails,
  args: { articleId: "1" },
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
