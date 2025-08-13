import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ArticleImageBlockExample } from "entities/Article/model/mocs/ArticleExamples";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent";

const meta: Meta<typeof ArticleImageBlockComponent> = {
  title: "entities/Article/ArticleImageBlockComponent",
  component: ArticleImageBlockComponent,
  args: {
    article: ArticleImageBlockExample,
  },
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlockComponent>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  decorators: [ThemeDecorator(Theme.CUTE)],
};
