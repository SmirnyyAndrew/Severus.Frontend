import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ArticleTextBlockExample } from "entities/Article/model/mocs/ArticleExamples";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ArticleTextBlockComponent } from "./ArticleTextBlockComponent";

const meta: Meta<typeof ArticleTextBlockComponent> = {
  title: "entities/Article/ArticleTextBlockComponent",
  component: ArticleTextBlockComponent,
  args: {
    article: ArticleTextBlockExample,
  },
};

export default meta;
type Story = StoryObj<typeof ArticleTextBlockComponent>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
