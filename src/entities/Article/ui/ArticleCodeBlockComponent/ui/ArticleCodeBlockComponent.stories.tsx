import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ArticleCodeBlockExample } from "entities/Article/model/mocs/ArticleExamples";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";

const meta: Meta<typeof ArticleCodeBlockComponent> = {
  title: "entities/Article/ArticleCodeBlockComponent",
  component: ArticleCodeBlockComponent,
  args: {
    article: ArticleCodeBlockExample,
  },
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Light: Story = {
  args: {
    className: "",
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
