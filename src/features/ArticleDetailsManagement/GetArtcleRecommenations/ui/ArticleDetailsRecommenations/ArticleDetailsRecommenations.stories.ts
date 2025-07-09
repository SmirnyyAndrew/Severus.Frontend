import { Meta, StoryObj } from "@storybook/react/*";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ArticleDetailsRecommenations } from "./ArticleDetailsRecommenations";

const meta: Meta<typeof ArticleDetailsRecommenations> = {
  title: "entities/ArticleDetailsManagement/ArticleDetailsRecommenations",
  component: ArticleDetailsRecommenations,
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsRecommenations>;

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
