import { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import CreateArticlePage from "./CreateArticlePage";

const meta: Meta<typeof CreateArticlePage> = {
  title: "pages/ArticleManagement/CreateArticlePage",
  component: CreateArticlePage,
};

export default meta;
type Story = StoryObj<typeof CreateArticlePage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Cute: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.CUTE)],
};
