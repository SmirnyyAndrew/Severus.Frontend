import { Meta, StoryObj } from "@storybook/react";
import { routeConfig } from "app/providers/router/config/routeConfig";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Routes } from "shared/const/router";
import EditArticlePage from "./EditArticlePage";

const meta: Meta<typeof EditArticlePage> = {
  title: "pages/ArticleManagement/EditArticlePage",
  component: EditArticlePage,
  parameters: {
    routePath: Routes.Article.Edit("2"),
    routePathPattern: routeConfig["article_edit"].path,
  },
};

export default meta;
type Story = StoryObj<typeof EditArticlePage>;

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
